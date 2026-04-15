export const handleApiError = (error) => {
  if (error.response) {
    return {
      message: error.response.data?.message || "Request failed",
      status: error.response.status,
      data: error.response.data,
    };
  }

  if (error.request) {
    return {
      message: "Network error. Please check your internet connection.",
      status: null,
      data: null,
    };
  }

  return {
    message: error.message || "Something went wrong",
    status: null,
    data: null,
  };
};