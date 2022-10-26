import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteProduct } from '@services/api/products';
import Link from 'next/link';

const Product = ({ product, setAlert, setOpen }) => {
  const deleteHandeler = () => {
    deleteProduct(product.id)
      .then(() => {
        setAlert({
          active: true,
          message: 'Product was deleted succesfully',
          type: 'success',
          autoClose: false,
        });
        setOpen(false);
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: 'error',
          autoClose: false,
        });
        setOpen(false);
      });
  };

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
        <Link href={`/dashboard/edit/${product.id}`}>
          <button className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Edit
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={deleteHandeler}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <TrashIcon className="-ml-1 mr-2 h-5 w-5" />
          <p>Delete</p>
        </button>
      </td>
    </tr>
  );
};

export default Product;
