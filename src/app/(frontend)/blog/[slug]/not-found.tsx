const NotFound = () => {
  return (
    <div className="w-full py-[100px]">
      <div className="max-w-[800px] mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-muted-foreground">
          The article you are looking for doesn't exist or may have been moved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
