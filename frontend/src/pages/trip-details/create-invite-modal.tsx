import { Mail, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";

interface CreateInviteModalProps {
  closeCreateInviteModal: () => void;
}

export function CreateInviteModal(props: CreateInviteModalProps) {
  const { closeCreateInviteModal } = props;
  const { tripId } = useParams();
  const [guestEmail, setGuestEmail] = useState("");

  async function createInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await api.post(`/trips/${tripId}/invites`, {
      email: guestEmail,
    });

    window.document.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex  items-center justify-between">
            <h2 className="text-lg font-semibold">
              Convidar novo participante
            </h2>
            <button onClick={closeCreateInviteModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
        </div>

        <form onSubmit={createInvite} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />
            <input
              onChange={(event) => setGuestEmail(event.target.value)}
              type="email"
              name="email"
              placeholder="E-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Enviar convite
          </Button>
        </form>
      </div>
    </div>
  );
}
