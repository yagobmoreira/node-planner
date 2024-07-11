import { format } from "date-fns";
import { MapPin, Calendar, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface UpdateDestinationAndDateModalProps {
  closeUpdateDestinationAndDateModal: () => void;
}

export function UpdateDestinationAndDateModal(
  props: UpdateDestinationAndDateModalProps
) {
  const { tripId } = useParams()
  const { closeUpdateDestinationAndDateModal } = props;
  const [destination, setDestination] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayDate =
  eventStartAndEndDates &&
  eventStartAndEndDates.from &&
  eventStartAndEndDates.to
    ? format(eventStartAndEndDates.from, "d' de 'LLL")
        .concat(" até ")
        .concat(format(eventStartAndEndDates.to, "d ' de 'LLL"))
    : null;

  async function updateTrip() {
    if (!destination) {
      return
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates.to) {
      return
    }

    await api.put(`/trips/${tripId}`, {
      destination,
      starts_at: eventStartAndEndDates.from,
      ends_at: eventStartAndEndDates.to,
    })

    window.document.location.reload();    
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center gap-4">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
      <div className="space-y-2">
          <div className="flex  items-center justify-between">
            <h2 className="text-lg font-semibold">Atualizar viagem</h2>
            <button onClick={closeUpdateDestinationAndDateModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5 text-zinc-400" />
          <input
            onChange={(event) => setDestination(event.target.value)}
            required
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <button
          onClick={openDatePicker}
          className="flex items-center gap-2 outline-none text-left w-[260px]"
        >
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-400 w-40 flex-1"> {displayDate ? displayDate : `Quando?`}</span>
        </button>

        {isDatePickerOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex  items-center justify-between">
                  <h2 className="text-lg font-semibold">Selecione a data</h2>
                  <button onClick={closeDatePicker}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
              </div>

              <DayPicker
                mode="range"
                selected={eventStartAndEndDates}
                onSelect={setEventStartAndEndDates}
              />
            </div>
          </div>
        )}

        <Button onClick={updateTrip} variant="primary" size="full">
          Atualizar dados
        </Button>
      </div>
    </div>
  );
}
