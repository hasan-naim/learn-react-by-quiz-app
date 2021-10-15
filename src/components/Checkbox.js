export default function CheckBox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input {...rest} /> <span>{text}</span>
    </label>
  );
}
