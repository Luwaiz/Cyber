import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import {
    Module1,
    Module2,
    Module3,
    Module4,
    Module5,
    Module6,
} from "../../../constants/Chapter5";

const Lesson5 = ({ route, navigation }) => {
    const { selectedModuleId } = route.params;
    console.log("my selected module", selectedModuleId);

    // Render corresponding module based on the selected one
    const renderModule = () => {
        switch (selectedModuleId) {
            case 1:
                return <Module1 />;
            case 2:
                return <Module2 />;
            case 3:
                return <Module3 />;
            case 4:
                return <Module4 />;
            case 5:
                return <Module5 />;
            case 6:
                return <Module6/>
            default:
                return <Module1 />;
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {renderModule()}
        </ScrollView>
    );
};

export default Lesson5;
