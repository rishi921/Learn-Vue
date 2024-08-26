import { customRef } from "vue";

const formatDate = (date, format) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  if (format == "MM-DD-YYYY") {
    return date.toLocaleDateString("en-US", options).replace(/\//g, "-");
  } else if (format == "DD-MM-YYYY") {
    return date.toLocaleDateString("en-US", options).replace(/\//g, "-");
  } else if (format == "MM/DD/YYYY") {
    return date.toLocaleDateString("en-US", options).replace();
  } else if (format == "DD/MM/YYYY") {
    return date.toLocaleDateString("en-US", options).replace();
  }
};

const useFormatDate = (date, format) => {
  return customRef((track, trigger) => {
    let value = date;
    return {
      get() {
        track();
        return formatDate(value, format);
      },
      set(newValue) {
        trigger();
        value = newValue;
      },
    };
  });
};

export default useFormatDate;