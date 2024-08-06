import CustomInput from "../../components/common/CustomInput";
import Button from "../../components/common/Button";
import Heading from "../../components/common/Heading";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const PWD_REGEX = /^.{8}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Register() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const initial = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState({
    ...initial,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(`${apiUrl}/v1/register`);
  };

  const validateInputs = () => {
    const newErrors = {};

    const name = formData.fullName.split(" ");
    console.log(name);
    if (formData.fullName.trim() == "" || name.length < 2) {
      newErrors.name = "Input your full name";
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!PWD_REGEX.test(formData.password)) {
      newErrors.password = "Invalid password";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const register = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const body = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
    };

    const res = await fetch(`${apiUrl}/v1/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    // passing the error
    if (data.errors) {
      setErrors({
        name: data.errors.name ?? "",
        email: data.errors.email ?? "",
        password: data.errors.password ?? "",
      });
    }

    // redirect the user and set the form data to the default value
    if (data.status === "success") {
      navigate("/");
      setFormData({ ...initial });
    }
  };

  return (
    <section className="max-w-[600px] px-3 min-[500px]:px-5 sm:px-0 mx-auto h-screen flex items-center justify-center">
      <div className="w-full">
        <Heading title={"Sign Up"} subtitle={""} />
        <form
          className="bg-white px-3 py-10 shadow-lg w-full rounded-md"
          onSubmit={register}
        >
          <div className="py-2">
            <CustomInput
              inputClass={""}
              inputData={{
                placeholder: "Full name",
                name: "fullName",
                value: formData.fullName,
              }}
              onChange={handleInputChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="py-2">
            <CustomInput
              inputClass={""}
              inputData={{
                placeholder: "email@email.com",
                name: "email",
                type: "email",
                value: formData.email,
              }}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          {/* <div>
            <p>
              <small>
                Password must contain one uppercase, one lower case, one special
                character and and a number.{" "}
              </small>
            </p>
            <p>
              <small>It must be 8 minimum character </small>
            </p>
          </div> */}
          <div className="py-2">
            <CustomInput
              inputClass={""}
              inputData={{
                placeholder: "Password",
                name: "password",
                type: "password",
                value: formData.password,
              }}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="py-2">
            <CustomInput
              inputClass={""}
              inputData={{
                placeholder: "Confirm Password",
                name: "confirmPassword",
                type: "password",
                value: formData.confirmPassword,
              }}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          <Button
            className={"bg-primary text-white w-full my-3"}
            type={"submit"}
          >
            Register
          </Button>
        </form>
      </div>
    </section>
  );
}
