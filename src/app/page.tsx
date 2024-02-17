import ScheduleForm from "./WebPages/ScheduleForm";
import UpdateForm from "./WebPages/updateTheEvent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ScheduleForm/>
      <UpdateForm/>
    </main>
  );
}
