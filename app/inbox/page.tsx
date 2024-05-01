import Conversation from "../components/inbox/Conversation";

const InboxPage = () => {
  return (
    <main className=" pb-6 max-w-[1500px] mx-auto px-6">
      <h1 className=" my-6 text-2xl">Inbox</h1>

      <Conversation />
      <Conversation />
      <Conversation />
    </main>
  )
}

export default InboxPage;