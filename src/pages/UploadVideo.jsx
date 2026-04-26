import VideoUploadForm from "../features/videos/components/VideoUploadForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui";

function UploadVideo() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload Video</CardTitle>
        </CardHeader>

        <CardContent>
          <VideoUploadForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default UploadVideo;