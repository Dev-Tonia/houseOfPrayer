import CustomInput from "../../components/common/CustomInput";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/common/Heading";
import { useState } from "react";

const PWD_REGEX = /^.{8}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Login() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const initial = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState({ ...initial });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateInputs = () => {
    const newErrors = {};
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
    return Object.keys(newErrors).length === 0;
  };

  const login = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    setIsLoading(true);

    const body = {
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
    };

    try {
      const res = await fetch(`${apiUrl}/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.errors) {
        setErrors({
          email: data.errors.email ?? "",
          password: data.errors.password ?? "",
        });
      }
      if (data.status === "failed") {
        setErrors({ general: "Invalid credential" });
      }

      if (data.status === "success") {
        sessionStorage.setItem("user", JSON.stringify(data.data));
        navigate("/dashboard");
        setFormData({ ...initial });
      }
      console.log(data.data);
    } catch (error) {
      setErrors({ general: "An unexpected error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-[600px] px-3 min-[500px]:px-5 sm:px-0 mx-auto h-screen flex items-center justify-center">
      <div className="w-full">
        <Heading title="Sign In" subtitle="" />
        <form
          className="bg-white px-3 py-10 shadow-lg w-full rounded-md"
          onSubmit={login}
        >
          <div className="py-2">
            <CustomInput
              inputClass=""
              inputData={{
                placeholder: "email@email.com",
                name: "email",
                type: "email",
              }}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="py-2">
            <CustomInput
              inputClass=""
              inputData={{
                placeholder: "Password",
                name: "password",
                type: "password",
              }}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="py-2">
            <CustomInput
              inputClass=""
              inputData={{
                placeholder: "confirm password",
                name: "confirmPassword",
                type: "password",
              }}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          {errors.general && <p className="text-red-500">{errors.general}</p>}
          <Button
            className="bg-primary text-white w-full my-3"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </section>
  );
}
