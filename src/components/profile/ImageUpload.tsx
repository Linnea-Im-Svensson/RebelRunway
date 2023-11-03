import { NextPage } from "next";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";

interface Props {}

const ImageUpload: NextPage<Props> = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [getImage, setGetImage] = useState<string>("");
  const [showForm, setShowForm] = useState(false);

  const uploadImage = api.profileImage.update.useMutation();
  const getImageApi = api.profileImage.getAll.useQuery();

  useEffect(() => {
    if (getImageApi.data) {
      const getUser = getImageApi.data[getImageApi.data.length - 1];
      const image = getUser?.image;
      setGetImage(image || "");
    } else {
      console.log("Error");
    }
    console.log(selectedFile, selectedImage);
  }, [getImageApi.data]);

  const handleUpload = async () => {
    setUploading(true);
    try {
      console.log("SelectedFile", selectedFile);
      if (!selectedFile) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result?.toString().split(",")[1];
        console.log("base64String", base64String);
        uploadImage.mutate({
          image: base64String || "",
        });
      };

      reader.readAsDataURL(selectedFile);
      window.location.reload();
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };
  return (
    <div className="flex flex-col items-center space-y-6 md:px-20">
      <div className="pb-5">
        {getImage === "" ? (
          <div>Loading...</div>
        ) : (
          <img
            src={`data:image/png;base64,${getImage}`}
            alt="Your Image"
            height="700px"
            style={{ maxHeight: "150px" }}
          />
        )}
      </div>
      <button
        onClick={() => setShowForm(true)}
        className="bg-primary mt-6 cursor-pointer rounded-md px-3 py-2 font-semibold text-white hover:bg-cyan-300 md:px-4 md:py-3"
      >
        Update image
      </button>
      {showForm && (
        <div>
          <label>
            <input
              type="file"
              hidden
              onChange={({ target }) => {
                if (target.files) {
                  const file = target.files[0];
                  setSelectedImage(URL.createObjectURL(file!));
                  setSelectedFile(file);
                }
              }}
            />
            <div
              className="flex aspect-video h-40 w-40 cursor-pointer items-center
        justify-center border-2 border-dashed border-slate-300 text-center"
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt=""
                  style={{ maxHeight: "150px" }}
                />
              ) : (
                <div>
                  <p>Select Image </p>
                  <p className="text-xs"> maximum size 1 MB</p>
                </div>
              )}
            </div>
          </label>
          <div className="flex items-start">
            <button
              onClick={() => handleUpload()}
              disabled={uploading || selectedFile == undefined}
              style={{ opacity: uploading ? ".5" : "1" }}
              className="bg-primary mt-6 cursor-pointer rounded-md px-3 py-2 font-semibold text-white hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-300 md:px-4 md:py-3"
            >
              {uploading ? "Uploading" : "Upload"}
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="ml-4 mt-6 cursor-pointer rounded-md bg-black px-3 py-2 font-semibold text-white hover:bg-slate-500 md:px-4 md:py-3"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
