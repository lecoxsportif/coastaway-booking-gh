import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { createBooking } from "@/lib/api";

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [roomType, setRoomType] = useState<string>("");
  const [guests, setGuests] = useState<string>("");

  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      toast({
        title: data.message, // "Booking Request Received!"
        description: `Reference ID: ${data.id}. We'll contact you shortly.`,
      });
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkIn || !checkOut || !roomType || !guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including dates and room selection.",
        variant: "destructive"
      });
      return;
    }

    const formData = new FormData(e.currentTarget);

    mutation.mutate({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      roomType: roomType,
      checkIn: format(checkIn, "yyyy-MM-dd"),
      checkOut: format(checkOut, "yyyy-MM-dd"),
      guests: parseInt(guests),
      message: formData.get("message") as string || undefined
    });
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Book Your Stay</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reserve your perfect coastal getaway
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-elevated">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Reservation Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+233 XX XXX XXXX" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="room">Room Type</Label>
                  <Select required value={roomType} onValueChange={setRoomType}>
                    <SelectTrigger id="room">
                      <SelectValue placeholder="Select a room" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Odopa">Odopa - $71/night</SelectItem>
                      <SelectItem value="Ahoto">Ahoto - $71/night</SelectItem>
                      <SelectItem value="Hwebi">Hwebi - $69/night</SelectItem>
                      <SelectItem value="Ebusua">Ebusua - $55/night</SelectItem>
                      <SelectItem value="Akyedi">Akyedi - $45/night</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < (checkIn || new Date())}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Select required value={guests} onValueChange={setGuests}>
                  <SelectTrigger id="guests">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests (Optional)</Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Any special requirements or requests?"
                />
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-primary text-primary-foreground hover:opacity-90 py-6 text-lg"
              >
                {mutation.isPending ? "Submitting..." : "Submit Booking Request"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll contact you within 24 hours to confirm your reservation
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
