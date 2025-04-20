import React, { useState } from "react";
import BirthdayCard from "./components/BirthdayCard";
import MessageForm from "./components/MessageForm";
import SuccessMessage from "./components/SuccessMessage";
import Confetti from "./components/Confetti";
import FloatingBalloons from "./components/FloatingBalloons";
import ShareButton from "./components/ShareButton";
import { Send } from "lucide-react";

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Your information - in a real app, this would come from a configuration or API
  const birthdayPerson = {
    name: "Ahmed Lotfi", // Replace with your name
    photoUrl: "pic.jpg",
    birthdayDate: new Date("2025-04-22"), // Your birthday - year doesn't matter much here
  };

  const handleSubmitSuccess = () => {
    setShowSuccess(true);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitError = (errorMessage: string) => {
    setError(errorMessage);
    setShowSuccess(false);
  };

  const handleSendAnother = () => {
    setShowSuccess(false);
    setError(null);
  };

  return (
    <div className="min-h-screen pb-20">
      <FloatingBalloons />
      {showSuccess && <Confetti />}

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl mx-auto">
            {showSuccess ? (
              <SuccessMessage
                name={birthdayPerson.name}
                onSendAnother={handleSendAnother}
              />
            ) : (
              <>
                <div className="mb-10">
                  <BirthdayCard
                    name={birthdayPerson.name}
                    photoUrl={birthdayPerson.photoUrl}
                    birthdayDate={birthdayPerson.birthdayDate}
                  />
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
                    Send Your Birthday Wishes!
                  </h2>

                  <a
                    href="https://wa.me/201064640706"
                    type="submit"
                    className="w-full py-3 px-6 text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-md hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transform transition hover:scale-[1.02] disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    Send Message Via WhatsApp <Send size={18} />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <ShareButton name={birthdayPerson.name} />
    </div>
  );
}

export default App;
