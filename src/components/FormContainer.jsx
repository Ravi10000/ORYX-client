const FormContainer = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-login-pattern relative bg-no-repeat bg-cover before:w-full before:bg-black before:absolute before:h-full before:opacity-80">
      <div className="logo"></div>
      <div className="max-w-md w-full p-10 space-y-6 bg-white rounded-lg z-50">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
