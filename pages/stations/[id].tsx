import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../common/useApollo";
import { useGetStationByIdQuery } from "../../generated";

function getMetaSingleStation({ query }) {
  const stationID = Number(get(query, "id"));

  const { data } = useGetStationByIdQuery({
    variables: {
      stationID,
    },
  });

  return data ? (
    <ul>
      <h1>ID: {data.station.id}</h1>
      <li>{data.station.metrics.volume}</li>
      <li>{data.station.metrics.margin}</li>
      <li>{data.station.metrics.profit}</li>
    </ul>
  ) : (
    <div>Loading...</div>
  );
}

export default withApollo(getMetaSingleStation, { getDataFromTree });
