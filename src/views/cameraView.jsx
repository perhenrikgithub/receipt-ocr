import { StyleSheet, Text, View, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibary from "expo-media-library";
import React, { useState, useEffect, useRef } from "react";
import Button from "./src/components/Button";

export default function App() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {

        (async () => {
            MediaLibary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === "granted");
        })();
    }, []);

    const getTextFromPhoto = async (uri) => {
        const path = require('path');
        const { createWorker } = require('tesseract.js');
        // const image = path.resolve(__dirname, (uri));
        
        const worker = await createWorker("nor", 1);
        console.log("ABABAB")
        const { data: { text } } = await worker.recognize(uri);
        console.log(text);
        await worker.terminate();
    }

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <View style={styles.container}>
            {!image ? (
                <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 30,
                        }}
                    >
                        <Button
                            icon={flash === Camera.Constants.FlashMode.off ? "flash-off" : "flash"}
                            color={flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"}
                            onPress={() => {
                                setFlash(flash === Camera.Constants.FlashMode.on ? Camera.Constants.FlashMode.off : Camera.Constants.FlashMode.on);
                            }}
                        />
                    </View>
                </Camera>
            ) : (
                <Image source={{ uri: image }} style={styles.camera} />
            )}
            <View>
                {!image ? (
                    <Button title={"Take image"} icon="camera" onPress={takePicture} />
                ) : (
                    <View style={styles.buttonContainer}>
                        <Button title={"Retake"} icon="retake" onPress={() => setImage(null)} />
                        <Button title={"Use image"} icon="save" onPress={() => getTextFromPhoto(image)} />
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        paddingBottom: 30,
        paddingTop: 20,
    },
    camera: {
        flex: 5,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
});
