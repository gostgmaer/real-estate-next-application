import * as Yup from "yup";


const commonErrorMessage = 'This field is required';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().min(8).max(12).required("Password is required"),
});

export const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  isAgreed: Yup.boolean().oneOf(
    [true],
    "You must agree to the Terms and Privacy Policy"
  ),
});

export const forgetPasswordValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const resetPasswordValidation = Yup.object().shape({
  password: Yup.string().min(8).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const requiredMsg = "This field is required";

export const ProductValidation = Yup.object().shape({
  title: Yup.string().required(requiredMsg),
  sku: Yup.string().required(requiredMsg),
  productType: Yup.string().required(requiredMsg),
  categories: Yup.string().required(requiredMsg),
  descriptions: Yup.string().required(requiredMsg),
  price: Yup.string().required(requiredMsg),
  costPrice: Yup.string().optional(),
  trackInventory: Yup.string().required(requiredMsg),
  currentStockLevel: Yup.string().required(requiredMsg),
  lowStockLevel: Yup.string().required(requiredMsg),
  gtin: Yup.string().required(requiredMsg),
  brandName: Yup.string().required(requiredMsg),
});

export const billingAddressValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  billingfirstName: Yup.string().required("First Name is required"),
  billingcompany: Yup.string(),
  billinglastName: Yup.string().required("Last Name is required"),
  billingphoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be a number")
    .length(10, "Phone number must be exactly 10 digits")
    .required("Phone number is Required"),
  billingapartment: Yup.string(),
  billingstreet: Yup.string().required("Street is required"),
  billingcity: Yup.string().required("City is required"),
  billingstate: Yup.string().required("State is required"),
  billingpostalCode: Yup.string()
    .required("Postal Code is required")
    .matches(/^[0-9]+$/, "Must be a number")
    .length(6, "Pincode Should be 6 digit"),
  billingcountry: Yup.string().required("Country is required"),
  accountCreate: Yup.boolean(),
  notuseBillingAddressForShipping: Yup.boolean(),

  additionalNotes: Yup.string(),
  payment_method: Yup.string().required("Payment Method is required"),
});

export const shippingAddressValidationSchema = Yup.object({
  // Add more validation as needed
});

export const reviewValidationSchema = Yup.object().shape({
  title: Yup.string().required("title is required"),

  rating: Yup.number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating can not be more than 5"),
  review: Yup.string().required("Review is required"),
});

const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
export const AddressvalidationSchema = Yup.object().shape({
  addressname: Yup.string().required(),
  phone: Yup.string().matches(phoneReg, "Phone Number is not Valid").required(),
  street: Yup.string().required(),
  city: Yup.string().required(),
  country: Yup.string().required(),
  postalCode: Yup.string().required(),
  state: Yup.string().required(),
  lastName: Yup.string().required(),
  firstName: Yup.string().required(),
});

export const profileValidationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  dateOfBirth: Yup.date().required("Required"),
});


 export const propertySchema = Yup.object().shape({
   property_id: Yup.string().required(commonErrorMessage),
   name: Yup.string().required(commonErrorMessage),
   type: Yup.string().required(commonErrorMessage),
   location: Yup.object().shape({
     city: Yup.string().required(commonErrorMessage),
     state: Yup.string().required(commonErrorMessage),
     country: Yup.string().required(commonErrorMessage),
     zipcode: Yup.string().required(commonErrorMessage),
   }),
   description: Yup.string().required(commonErrorMessage),
   amenities: Yup.array().of(Yup.string()),
   capacity: Yup.number().required(commonErrorMessage),
   bedrooms: Yup.number().required(commonErrorMessage),
   bathrooms: Yup.number().required(commonErrorMessage),
   price_per_night: Yup.number().required(commonErrorMessage),
   currency: Yup.string().required(commonErrorMessage),
   availability: Yup.object().shape({
     start_date: Yup.date().required(commonErrorMessage),
     end_date: Yup.date().required(commonErrorMessage),
   }),
   images: Yup.array().of(Yup.string()),
   host: Yup.object().shape({
     host_id: Yup.string().required(commonErrorMessage),
     host_name: Yup.string().required(commonErrorMessage),
     host_contact: Yup.string().email(commonErrorMessage).required(commonErrorMessage),
   }),
   year_of_construction: Yup.number().required(commonErrorMessage),
   construction_status: Yup.string().required(commonErrorMessage),
   parking: Yup.boolean().required(commonErrorMessage),
   is_furnished: Yup.boolean().required(commonErrorMessage),
   floor: Yup.object().shape({
     number: Yup.number().required(commonErrorMessage),
     total_floors: Yup.number().required(commonErrorMessage),
   }),
   size: Yup.object().shape({
     area: Yup.number().required(commonErrorMessage),
     unit: Yup.string().required(commonErrorMessage),
   }),

   rules: Yup.array().of(Yup.string().required(commonErrorMessage)),
   contact_person: Yup.object().shape({
     name: Yup.string().required(commonErrorMessage),
     email: Yup.string().email(commonErrorMessage).required(commonErrorMessage),
     phone: Yup.string().required(commonErrorMessage),
   }),
   booking_policy: Yup.string().required(commonErrorMessage),
   additional_info: Yup.string().required(commonErrorMessage),
 });
 