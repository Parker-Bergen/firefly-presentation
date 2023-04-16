

const getIp = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    const ipData = await res.json();
    return ipData.ip;
  };

  export default getIp;