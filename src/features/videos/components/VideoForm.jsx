import { useState } from "react";
import { Button, Input, Textarea, Checkbox } from "../../../components/ui";

function VideoForm({
  initialValues = {},
  onSubmit,
  loading = false,
  mode = "create",
  submitLabel = "Submit",
}) {
  const [formData, setFormData] = useState({
    title: initialValues.title || "",
    description: initialValues.description || "",
    isPublised: initialValues.isPublised ?? true,
    videofile: null,
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "file"
          ? files?.[0]
          : type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter video title"
        required
      />

      <Textarea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter video description"
        rows={5}
        required
      />

      {mode === "create" && (
        <Input
          label="Video File"
          name="videofile"
          type="file"
          accept="video/*"
          onChange={handleChange}
          required
        />
      )}

      <Input
        label="Thumbnail"
        name="thumbnail"
        type="file"
        accept="image/*"
        onChange={handleChange}
        required={mode === "create"}
      />

      <Checkbox
        label="Publish video"
        name="isPublised"
        checked={formData.isPublised}
        onChange={handleChange}
      />

      <Button type="submit" loading={loading} className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}

export default VideoForm;