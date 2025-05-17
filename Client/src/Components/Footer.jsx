 const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} JobBoard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
