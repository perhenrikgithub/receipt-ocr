import RNFS from 'react-native-fs';

function sendImage(uri) {
    RNFS.readFile(uri, 'base64')
    .then((base64Image) => {
        sendImageToServer(base64Image);
    })
    .catch((err) => {
        console.log(err.message, err.code);
    });

const sendImageToServer = (base64Image) => {
    const apiUrl = "http://192.168.248.100:5000/media/upload";
    const imageData = {
        image: base64Image
    };
    axios.post(apiUrl, imageData)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
}

export default sendImage