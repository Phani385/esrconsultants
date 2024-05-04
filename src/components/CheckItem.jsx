const CheckItem = ({ point }) => {
  return (
    <li className="flex gap-1 mb-2 items-start">
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/material-outlined/24/2250FC/checkmark--v1.png"
        alt="checkmark--v1"
      />
      <p className="text-gray-500">{point}</p>
    </li>
  );
};

CheckItem.propTypes = {
  point: String,
};

export default CheckItem;
