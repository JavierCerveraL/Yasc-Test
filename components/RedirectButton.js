import React, { useState } from 'react';
import Router from 'next/router';

const RedirectButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    Router.push('/Home', undefined, { shallow: true }).then(() => {
      setIsLoading(false);
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <button
          onSubmit={onFormSubmit}
          type="submit"
          onClick={handleClick}
          class="mt-4 bg-[#5944DF] text-[#E6E6FD] py-2 px-12 shadow rounded-lg hover:bg-[#1E0DEA] "
        >
          Login
        </button>
      )}
    </div>
  );
};

export default RedirectButton;
