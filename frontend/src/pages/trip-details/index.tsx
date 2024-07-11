import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { Guests } from "./guests";
import { ImportantLinks } from "./important-links";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { CreateLinkModal } from "./create-link-modal";
import { CreateInviteModal } from "./create-invite-modal";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  const [isCreateInviteModalOpen, setIsCreateInviteModalOpen] = useState(false);

  function openCreateInviteModal() {
    setIsCreateInviteModalOpen(true);
  }

  function closeCreateInviteModal() {
    setIsCreateInviteModalOpen(false);
  }

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  function openCreateLinkModal() {
    setIsCreateLinkModalOpen(true);
  }

  function closeCreateLinkModal() {
    setIsCreateLinkModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks openCreateLinkModal={openCreateLinkModal} />
          <div className="w-full h-px bg-zinc-800"></div>
          <Guests openCreateInviteModal={openCreateInviteModal}/>
        </div>

        {isCreateActivityModalOpen && (
          <CreateActivityModal
            closeCreateActivityModal={closeCreateActivityModal}
          />
        )}

        {isCreateLinkModalOpen && (
          <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
        )}

        {isCreateInviteModalOpen && (
          <CreateInviteModal closeCreateInviteModal={ closeCreateInviteModal }/>
        )}
      </main>
    </div>
  );
}
