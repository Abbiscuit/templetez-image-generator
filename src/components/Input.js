const InputColor = ({ value, onChange, label, type, id, name }) => {
  return (
    <div className={`pb-6 mb-12 border-b`}>
      <label className="text-sm mb-2 inline-block" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="w-full h-12 border rounded-md bg-gray-50 px-4"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputColor;
