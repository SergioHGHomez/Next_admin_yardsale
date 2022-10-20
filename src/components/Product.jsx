import React from 'react';

const Product = ({ product }) => {
  return (
    <tr key={product.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{product.title}</div>
            <div className="text-sm text-gray-500">{product.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{product.price}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
        <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Product;
