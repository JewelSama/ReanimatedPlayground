import { Stack } from "expo-router"

const RootLayout = () => {
    return( 
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="[id]" 
                options={{ animation: "slide_from_bottom" }}
            />
        </Stack>
    )
}

export default RootLayout;