export function formatPhoneNumber(phoneNumber) {
  // console.count("Phone No");
  // Use regular expressions to format the phone number
  const formattedPhoneNumber = phoneNumber.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1 $2 $3"
  );
  return formattedPhoneNumber;
}
