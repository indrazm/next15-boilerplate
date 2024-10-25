import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TextArea } from "@/components/ui/textaarea"

export default function Home() {
  return (
    <main className="p-12">
      <TextArea rows={6} />
      <Input placeholder="Placeholder" />
      <Button>Hello!</Button>
    </main>
  )
}
