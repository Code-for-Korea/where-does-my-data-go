import { useEffect, useMemo, useRef, useState } from "react";
import { Container, styled, Typography, Button, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { select } from "d3-selection";
import { scaleBand, scaleLinear, scaleOrdinal } from "d3-scale";
import {
  forceCollide,
  forceSimulation,
  forceX,
  forceY,
  SimulationNodeDatum,
} from "d3-force";
import { schemeTableau10 } from "d3-scale-chromatic";
import { parse } from "papaparse";

const DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOCrYS0ebaKSohdzgBTQ60Ndmwi1M6LqXFRkge-nI3GY7DtxIpSQUt8k3Z5EWBGdI3uqk2WCIFnzyx/pub?gid=928498616&single=true&output=csv";

const PADDING = {
  top: 20,
  right: 10,
  bottom: 20,
  left: 10,
};
const COLUMN_WIDTH = 60;
const LABEL_FONT_SIZE = 12;
const Y_LABEL_WIDTH = 100;

interface BreachNode extends SimulationNodeDatum {
  company: string;
  year: number;
  cause: string;
  records: number;
}

function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array)).sort();
}

const Svg = styled("svg")`
  fill: white;
  background: white;
`;

const LabelY = styled("text")`
  font-size: 12px;
  fill: ${({ theme }) => theme.palette.text.secondary};
  alignment-baseline: middle;
`;

const LabelX = styled("text")`
  font-size: 12px;
  fill: ${({ theme }) => theme.palette.text.secondary};
  text-anchor: middle;
`;

const GridV = styled("line")`
  stroke: lightgray;
  stroke-width: 1px;
  opacity: 0.5;
`;

const AxisX = styled("line")`
  stroke: black;
`;

function ClusteredForce({
  height,
  data,
}: {
  height: number;
  data: BreachNode[];
}) {
  const container = useRef<HTMLDivElement>(null);
  const svg = useRef(null);

  const { years, causes } = useMemo(
    () => ({
      years: unique(data.map((d) => d.year)),
      causes: unique(data.map((d) => d.cause)),
    }),
    [data]
  );

  const width = years.length * COLUMN_WIDTH;

  const y = useMemo(
    () =>
      scaleBand()
        .domain(causes)
        .range([PADDING.top, height - PADDING.bottom]),
    [causes, height]
  );

  const x = useMemo(
    () =>
      scaleBand()
        .domain(years.map(String))
        .range([PADDING.left + Y_LABEL_WIDTH, width - PADDING.right]),
    [years, width]
  );

  const r = useMemo(
    () =>
      scaleLinear()
        .domain([0, Math.max(...data.map((d) => d.records))])
        .range([10, 30]),
    [data]
  );

  const color = useMemo(
    () => scaleOrdinal().domain(causes).range(schemeTableau10),
    [causes]
  );

  const rowHeight = y.bandwidth() / causes.length;
  const columnWidth = x.bandwidth();

  const force = useMemo(() => forceSimulation<BreachNode>(), []);

  useEffect(() => {
    if (!svg.current) return;

    select(svg.current)
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", (d) => r(d.records))
      .attr("fill", (d) => color(d.cause) as string);

    force
      .nodes(data)
      .force(
        "x",
        forceX((d) => (x(d.year.toString()) || 0) + columnWidth / 2)
      )
      .force(
        "y",
        forceY((d) => (y(d.cause) || 0) + rowHeight)
      )
      .force(
        "collide",
        forceCollide((d) => (r(d.records) || 0) + 1)
      )
      .on("tick", () => {
        select(svg.current)
          .selectAll("circle")
          .data(data)
          .attr("cx", (d) => d.x || 0)
          .attr("cy", (d) => d.y || 0);
      })
      .restart();

    return () => {
      force.stop();
    };
  }, [svg, force, data, x, y, r, color, rowHeight, columnWidth]);

  // TODO : handle resize

  return (
    <Container ref={container}>
      <Svg ref={svg} width={`${width}px`} height={`${height}px`}>
        {causes.map((cause) => (
          <LabelY key={cause} x={PADDING.left} y={(y(cause) || 0) + rowHeight}>
            {cause}
          </LabelY>
        ))}
        {years.map((year) => {
          const _x = x(year.toString()) || 0;
          return (
            <g key={year}>
              <LabelX x={_x} y={height - PADDING.bottom}>
                {year}
              </LabelX>
              <GridV
                x1={_x}
                x2={_x}
                y1={PADDING.top}
                y2={height - PADDING.bottom}
              />
            </g>
          );
        })}
        <AxisX
          x1={PADDING.left + Y_LABEL_WIDTH}
          x2={width - PADDING.right}
          y1={height - PADDING.bottom - LABEL_FONT_SIZE}
          y2={height - PADDING.bottom - LABEL_FONT_SIZE}
        />
      </Svg>
    </Container>
  );
}

function useBreaches() {
  const [breaches, setBreaches] = useState<BreachNode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(DATA_URL);
      const csv = await response.text();
      const { data } = parse(csv);
      const body = data.slice(3) as string[][];
      const objects: BreachNode[] = body.map((row) => ({
        company: row[1],
        year: parseInt(row[3]),
        cause: row[5] || "??? ??? ??????",
        records: parseInt(row[6].replace(/,/g, "")),
      }));

      setBreaches(objects);
    };
    fetchData();
  }, []);

  return breaches;
}

function Stats() {
  const breaches = useBreaches();
  if (!breaches) return <div>"loading..."</div>;
  return <ClusteredForce height={500} data={breaches} />;
}

export default function LeakedStats() {
  return (
    <Container sx={{ pb: 6 }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        e?????????????????? ?????????, ????????????????????? ????????? ??????/?????? ???????????? ?????? ??????
        ??? ????????? ????????? ???????????? ????????????????????????. ??????/?????? ????????? ????????????
        ????????? ???????????????, ??????43.36%??? ?????????????????????. ????????? ????????? ???????????????
        ???????????? ?????? ???????????? ????????? ???????????? ?????? ????????? ??? ??? ????????????. ???
        ?????? ????????? ?????????????????????, ????????? ????????? ??????????????? ?????? ?????????
        ??????????????? ???????????? ????????????.
      </Typography>

      <Box mb={6} border={1} sx={{ borderColor: grey[400] }}>
        <div
          className="flourish-embed flourish-chart"
          data-src="visualisation/12041716"
          data-height="600px"
        />
      </Box>
      <Typography variant="body1">
        ??? 2020???8?????? ???????????????????????? ????????? ??????????????? ???????????? ??????
        ??????????????? ?????? ????????? ??????????????????2000??? ~ 2019??? ??????????????? ?????????
        ???????????????. 2020??? ????????? ???????????? ?????? ?????????????????? e???????????????????????????
        ??????????????????.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        href="https://docs.google.com/spreadsheets/d/1JoWXemxTDbMSsSMJrWOZylYBXePxSy_-21jmeeDEKtM/view#gid=595892600"
        target="_blank"
        sx={{ mt: 2 }}
      >
        ?????????????????? ??????/?????? ????????? ????????? ???????????? &raquo;
      </Button>
    </Container>
  );
}
