import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  description: string;
  location: string;
  media: FileList;
};

const Register = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("location", data.location);
    Array.from(data.media).forEach((file) => formData.append("media", file));

    const response = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setIsSubmitted(true);
      reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Register Your LED Screen
        </h1>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                {...register("description", { required: true })}
                className="w-full p-2 border rounded"
                placeholder="Describe your LED screen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                {...register("location", { required: true })}
                className="w-full p-2 border rounded"
                placeholder="Enter location"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Media</label>
              <input
                type="file"
                {...register("media", { required: true })}
                multiple
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-500">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mt-2">
              A registration document has been sent to your email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
