//Author : Valentine Elum
//For : Desyn Open Source
//Twitter : @VahlCode
//License : MIT License 

const truncjs = (string, startPos = 0, maxLength = 50) => {
    if (typeof string !== "string" && typeof string === "number") {
        string = string.toString()
    }
    if (string.length <= maxLength) {
        return string
      }
    return string.slice(startPos, maxLength) + '...'
}

export default truncjs;