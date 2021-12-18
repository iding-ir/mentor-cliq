export function csvToJson(csv) {
  const lines = csv.split("\n");

  const result = [];

  const headers = lines[0].split(",").map((header) => header.replace("\r", ""));

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i]
      .split(",")
      .map((header) => header.replace("\r", ""));

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result);
}
