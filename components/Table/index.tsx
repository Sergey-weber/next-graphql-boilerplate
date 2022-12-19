import { useMemo, useState } from "react";
import Link from "next/link";

const StationsTable = ({ stations }) => {
  const [fieldSorted, setFieldSorting] = useState(null);

  let sortedStations = [...stations];

  useMemo(() => {
    if (fieldSorted !== null) {
      if (fieldSorted === "name") {
        sortedStations.sort();
      } else {
        sortedStations.sort((a, b) => {
          if (a.metrics[fieldSorted] < b.metrics[fieldSorted]) {
            return -1;
          }
          if (a.metrics[fieldSorted] > b.metrics[fieldSorted]) {
            return 1;
          }
          return 0;
        });
      }
    }
  }, [fieldSorted, stations]);

  return (
    <table>
      <caption>Stations</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>
            <button type="button" onClick={() => setFieldSorting("name")}>
              Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => setFieldSorting("volume")}>
              Volume
            </button>
          </th>
          <th>
            <button type="button" onClick={() => setFieldSorting("margin")}>
              Margin
            </button>
          </th>
          <th>
            <button type="button" onClick={() => setFieldSorting("profit")}>
              Profit
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedStations.map((station) => (
          <tr key={station.id}>
            <td>{station.id}</td>
            <td>{station.name}</td>
            <td>{station.metrics.volume}</td>
            <td>{station.metrics.margin}</td>
            <td>{station.metrics.profit}</td>
            <td>
              <Link href="/stations/[id]" as={`/stations/${station.id}`}>
                Link
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { StationsTable };
