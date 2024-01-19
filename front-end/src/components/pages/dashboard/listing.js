import Table from "@/components/global/blocks/Table";
import { generateUrlFromNestedObject } from "@/lib/helper/functions";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit, MdPageview } from "react-icons/md";

const Listing = ({props}) => {
  const route = useRouter();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("");
  const pathname = usePathname();

  const handleSearch = () => {
    const paramsQuery = { page, limit };
    const checkQuerydata = generateUrlFromNestedObject({ ...paramsQuery });
    route.push(`${pathname}${checkQuerydata}`);
  };

  useEffect(() => {
    handleSearch();
  }, [sort, page, limit]);


  // const data = React.useMemo(
  //   () => [
  //     { id: 1, name: "Property 1", price: "$500,000", location: "City A" },
  //     { id: 2, name: "Property 2", price: "$600,000", location: "City B" },
  //     // Add more properties as needed
  //   ],
  //   []
  // );

  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "_id",isSortable: true },
      { Header: "Name", accessor: "name" },
      { Header: "Price", accessor: "price_per_night" },
      { Header: "Host", accessor: "host.host_contact" },
    ],
    []
  );

  const buttons = [
    {
      label: <MdEdit className=" w-5 h-5" />,
      onClick: (property) => {
        route.push(`/dashboard/listing/${property._id}/update`);
      },
    },
    {
      label: <MdPageview className=" w-5 h-5" />,
      onClick: (property) => {
        route.push(`/dashboard/listing/${property._id}`);
      },
    },
    {
      label: <MdDelete className=" w-5 h-5" />,
      onClick: (property) => {
        console.log("Delete property:", property);
      },
    },
    // Add more buttons as needed
  ];

  return (
    <div>
      <Table
        columns={columns}
        data={props?.data?.result}
        buttons={buttons}
        params={{
          setPage: setPage,
          setLimit: setLimit,
          limit,
          page,
          total: props?.data?.total_record,
        }}
      />
    </div>
  );
};

export default Listing;
