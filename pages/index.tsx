import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../common/useApollo";
import { GetStationsQuery, useGetStationsQuery } from "../generated";
import { StationsTable } from "../components/Table";

function Home() {
  const { data } = useGetStationsQuery();

  const stations = get(data, "stations", []) as GetStationsQuery["stations"];

  return (
    <div>
      <StationsTable stations={stations} />
    </div>
  );
}

export default withApollo(Home, { getDataFromTree });
