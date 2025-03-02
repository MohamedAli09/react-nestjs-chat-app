import List from "@mui/material/List";
import ChatListItem from "./ChatListItems/ChatListItems";
import { Divider, Stack } from "@mui/material";
import ChatListHeader from "./ChatListHeader/ChatListHeader";
import { useState } from "react";
import ChatListAdd from "./ChatListAdd/ChatListAdd";
import { useGetChats } from "../../hooks/useGetChats";

const ChatList = () => {
  const [chatListAddVisible, setChatListAddVisible] = useState(false);
  const { data } = useGetChats();

  return (
    <>
      <ChatListAdd
        open={chatListAddVisible}
        handleClose={() => setChatListAddVisible(false)}
      />
      <Stack>
        <ChatListHeader handleAddChat={() => setChatListAddVisible(true)} />
        <Divider />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          {data?.chats.map((chat) => (
            <ChatListItem key={chat._id} name={chat.name} />
          ))}
        </List>
      </Stack>
    </>
  );
};

export default ChatList;
