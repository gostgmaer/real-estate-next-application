import React, { useState } from "react";
import { useFormik } from "formik";
import { propertySchema } from "@/lib/validation";
import TextField from "../fields/TextField";
import Input from "../fields/input";
import SelectField from "../fields/SelectField";
import { FaDollarSign } from "react-icons/fa";
import { Country, State, City } from "country-state-city";
import MultiImageUploadr from "../fields/multiImageUploadr";
export const PropertyForm = () => {
    const [file, setFile] = useState([]);
  const formik = useFormik({
    initialValues: {
      property_id: "",
      name: "",
      type: "",
      location: {
        city: "",
        state: "",
        country: "",
        zipcode: "",
      },
      description: "",
      amenities: [],
      capacity: 0,
      bedrooms: 0,
      bathrooms: 0,
      price_per_night: 0,
      currency: "",
      availability: {
        start_date: "",
        end_date: "",
      },
      images: [],
      host: {
        host_id: "",
        host_name: "",
        host_contact: "",
      },
      year_of_construction: 0,
      construction_status: "",
      parking: false,
      is_furnished: false,
      floor: {
        number: 0,
        total_floors: 0,
      },
      size: {
        area: 0,
        unit: "",
      },
      rating: 0,
      reviews: [],
      rules: [],
      contact_person: {
        name: "",
        email: "",
        phone: "",
      },
      booking_policy: "",
      additional_info: "",
    },
    validationSchema: propertySchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  const propertType = [
    {
      id: 1,
      type: "Residential",
      attributes: ["House", "Apartment", "Condo", "Townhouse"],
    },
    {
      id: 2,
      type: "Commercial",
      attributes: ["Office", "Retail", "Industrial"],
    },
    {
      id: 3,
      type: "Land",
      attributes: ["Agricultural", "Residential", "Commercial"],
    },
    {
      id: 4,
      type: "Vacation",
      attributes: ["Cabin", "Beach House", "Mountain Retreat"],
    },
  ];

  return (
    <div className=" bg-white max-w-7xl m-auto rounded-lg p-5">
      <form
        onSubmit={formik.handleSubmit}
        className=" mx-auto mt-8 p-5 bg-gray-50 grid rounded-lg"
      >
        <div className="  w-5/6 mx-auto mt-8 grid  gap-3 sm:grid-cols-2 col-span-full">
          <h2 className="col-span-full">Basic Info</h2>
          <div className="sm:col-span-1">
            <Input
              label={"Property Name"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("name"),
                placeholder: "Name",
              }}
              classes={undefined}
              icon={undefined}
              id={"name"}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>
          <div className="sm:col-span-1">
            <SelectField
              options={propertType}
              id={"type"}
              label={"Property Type"}
              additionalAttrs={{ ...formik.getFieldProps("type") }}
              placeholder={"Select"}
              optionkeys={{ key: "id", value: "type" }}
            />

            {formik.errors.type && formik.touched.type && (
              <div className="text-red-500 text-sm">{formik.errors.type}</div>
            )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"Capacity"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("capacity"),
                placeholder: "capacity",
              }}
              classes={undefined}
              icon={undefined}
              id={"capacity"}
            />
            {formik.errors.capacity && formik.touched.capacity && (
              <div className="text-red-500 text-sm">
                {formik.errors.capacity}
              </div>
            )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"price_per_night"}
              type={"number"}
              additionalAttrs={{
                ...formik.getFieldProps("price_per_night"),
                placeholder: "price_per_night",
              }}
              classes={undefined}
              icon={undefined}
              id={"price_per_night"}
            />
            {formik.errors.price_per_night &&
              formik.touched.price_per_night && (
                <div className="text-red-500 text-sm">
                  {formik.errors.price_per_night}
                </div>
              )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"bedrooms"}
              type={"number"}
              additionalAttrs={{
                ...formik.getFieldProps("bedrooms"),
                placeholder: "bedrooms",
              }}
              classes={undefined}
              icon={undefined}
              id={"bedrooms"}
            />
            {formik.errors.bedrooms && formik.touched.bedrooms && (
              <div className="text-red-500 text-sm">
                {formik.errors.bedrooms}
              </div>
            )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"bathrooms"}
              type={"number"}
              additionalAttrs={{
                ...formik.getFieldProps("bathrooms"),
                placeholder: "bathrooms",
              }}
              classes={undefined}
              icon={undefined}
              id={"bathrooms"}
            />
            {formik.errors.bathrooms && formik.touched.bathrooms && (
              <div className="text-red-500 text-sm">
                {formik.errors.bathrooms}
              </div>
            )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"year_of_construction"}
              type={"number"}
              additionalAttrs={{
                ...formik.getFieldProps("year_of_construction"),
                placeholder: "year_of_construction",
              }}
              classes={undefined}
              icon={undefined}
              id={"year_of_construction"}
            />
            {formik.errors.year_of_construction &&
              formik.touched.year_of_construction && (
                <div className="text-red-500 text-sm">
                  {formik.errors.year_of_construction}
                </div>
              )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"construction_status"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("construction_status"),
                placeholder: "construction_status",
              }}
              classes={undefined}
              icon={undefined}
              id={"construction_status"}
            />
            {formik.errors.construction_status &&
              formik.touched.construction_status && (
                <div className="text-red-500 text-sm">
                  {formik.errors.construction_status}
                </div>
              )}
          </div>
            <div className="col-span-full">
            <MultiImageUploadr selectedFiles={file} setSelectedFiles={setFile} label={"Property Images"}/>
           
          </div>
          <div className="col-span-full">
            <span className=" block text-sm capitalize font-semibold text-gray-600 mb-1.5">
              Descriptions :{" "}
            </span>
            <textarea
              rows={5}
              id="description"
              required
              placeholder="your Details "
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
              name="description"
              className="resize-none border rounded-md placeholder:capitalize p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
            {formik.errors.description && formik.touched.description && (
              <div className="text-red-500 text-sm">
                {formik.errors.description}
              </div>
            )}
          </div>
        </div>
        <div className="  w-5/6 mx-auto mt-8 grid  gap-3 sm:grid-cols-2 col-span-full">
        <h2 className="col-span-full">Availability</h2>
        <div className="sm:col-span-1">
           
           <Input
               label={"Start date"}
               type={"date"}
               additionalAttrs={{
                 ...formik.getFieldProps("availability.start_date"),
                 placeholder: "00/00/0000",
               }}
               classes={undefined}
               icon={undefined}
               id={"availability.start_date"}
             />
             {formik.errors.availability?.start_date &&
               formik.touched.availability?.start_date && (
                 <div className="text-red-500 text-sm">
                   {formik.errors.availability?.start_date}
                 </div>
               )}
           </div>
           <div className="sm:col-span-1">
           
           <Input
               label={"Start end_date"}
               type={"date"}
               additionalAttrs={{
                 ...formik.getFieldProps("availability.end_date"),
                 placeholder: "00/00/0000",
               }}
               classes={undefined}
               icon={undefined}
               id={"availability.end_date"}
             />
             {formik.errors.availability?.end_date &&
               formik.touched.availability?.end_date && (
                 <div className="text-red-500 text-sm">
                   {formik.errors.availability?.end_date}
                 </div>
               )}
           </div>
        
        </div>
        <div className="  w-5/6 mx-auto mt-8 grid  gap-3 sm:grid-cols-2 col-span-full">
          <h2 className="col-span-full">Location</h2>

          <div className="sm:col-span-1">
            <SelectField
              label={"Country"}
              id={"location.country"}
              options={Country.getAllCountries()}
              optionkeys={{ key: "isoCode", value: "name" }}
              placeholder={undefined}
              additionalAttrs={{ ...formik.getFieldProps("location.country") }}
            />

            {formik.errors.location?.country &&
              formik.touched.location?.country && (
                <div className="text-red-500 text-sm">
                  {formik.errors.location?.country}
                </div>
              )}
          </div>
          <div className="sm:col-span-1">
            <SelectField
              label={"State"}
              additionalAttrs={{
                ...formik.getFieldProps("location.state"),
                placeholder: "Select",
              }}
              id={"location.state"}
              options={State.getStatesOfCountry(formik.values.location.country)}
              optionkeys={{ key: "name", value: "name" }}
              placeholder={undefined}
            />

            {formik.errors.location?.state &&
              formik.touched.location?.state && (
                <div className="text-red-500 text-sm">
                  {formik.errors.location?.state}
                </div>
              )}
          </div>
          <div className="sm:col-span-1">
           
          <Input
              label={"City"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("location.city"),
                placeholder: "Delhi",
              }}
              classes={undefined}
              icon={undefined}
              id={"location.city"}
            />
            {formik.errors.location?.city &&
              formik.touched.location?.city && (
                <div className="text-red-500 text-sm">
                  {formik.errors.location?.city}
                </div>
              )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"Pincode"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("location.zipcode"),
                placeholder: "zipcode",
              }}
              classes={undefined}
              icon={undefined}
              id={"location.zipcode"}
            />
            {formik.errors.location?.zipcode && formik.touched.location?.zipcode && (
              <div className="text-red-500 text-sm">
                {formik.errors.location?.zipcode}
              </div>
            )}
          </div>
        </div>
        <div className="  w-5/6 mx-auto mt-8 grid  gap-3 sm:grid-cols-2 col-span-full">
        <h2 className="col-span-full">Host</h2>
        <div className="sm:col-span-1">
           
           <Input
               label={"Start date"}
               type={"date"}
               additionalAttrs={{
                 ...formik.getFieldProps("availability.start_date"),
                 placeholder: "00/00/0000",
               }}
               classes={undefined}
               icon={undefined}
               id={"availability.start_date"}
             />
             {formik.errors.availability?.start_date &&
               formik.touched.availability?.start_date && (
                 <div className="text-red-500 text-sm">
                   {formik.errors.availability?.start_date}
                 </div>
               )}
           </div>
           <div className="sm:col-span-1">
           
           <Input
               label={"Start end_date"}
               type={"date"}
               additionalAttrs={{
                 ...formik.getFieldProps("availability.end_date"),
                 placeholder: "00/00/0000",
               }}
               classes={undefined}
               icon={undefined}
               id={"availability.end_date"}
             />
             {formik.errors.availability?.end_date &&
               formik.touched.availability?.end_date && (
                 <div className="text-red-500 text-sm">
                   {formik.errors.availability?.end_date}
                 </div>
               )}
           </div>
        
        </div>
        <div className="col-span-full  w-2/6 mx-auto mt-20">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
