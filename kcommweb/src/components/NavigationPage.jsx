import { Paper, Container, Text } from "@mantine/core"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../appstate/slice/userSlice";
import { useEffect } from "react";

export const NavigationPage = () => {
  const userStore = useSelector((state) => {return state.userStore});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  // console.log("user - ", user && user.isLoading);
  return <>
    <Container>
      <Paper shadow="xs" p="xl">
        {!userStore.isLoading && userStore.error ? <Text>{JSON.stringify(userStore.error.message)}</Text> : null}
        {!userStore.isLoading && userStore.user && userStore.user.email ? 
          <><Text>{userStore.user.email}</Text><br /><Text>{userStore.user.fullName}</Text><br /><Text>{userStore.user.role}</Text> </>
          : null}
      </Paper>
    </Container>
  </>
}
