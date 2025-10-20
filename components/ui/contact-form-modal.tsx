"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        onClose();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  console.log(
    "ContactFormModal: isOpen =",
    isOpen,
    "onClose =",
    typeof onClose,
  );

  return (
    <AnimatePresence data-oid=":m2n0al">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[59]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            data-oid="2rhyez-"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            data-oid="9x3u40j"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full max-w-lg max-h-[85vh] overflow-y-auto"
              data-oid="lcpij1o"
            >
              <div
                className="relative w-full bg-black border border-green-500/50 rounded-2xl shadow-2xl shadow-green-500/20 backdrop-blur-md overflow-hidden min-h-fit"
                onClick={(e) => e.stopPropagation()}
                data-oid="lh2f1s."
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-green-700/20 via-emerald-600/10 to-green-700/20 animate-pulse"
                  data-oid="mz9:yhv"
                />

                {/* Glowing border effect */}
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 rounded-2xl opacity-30 blur-sm"
                  data-oid="ty5rk0m"
                />

                {/* Close button */}
                <motion.button
                  className="absolute top-6 right-6 z-20 p-2 bg-black/50 border border-gray-600 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClose();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-oid=".48.77z"
                >
                  <X className="w-5 h-5" data-oid="zx_sns." />
                </motion.button>

                {/* Content */}
                <div className="relative z-10 p-6" data-oid="uzwild7">
                  {/* Header */}
                  <div className="text-center mb-6" data-oid="o.pc40n">
                    <motion.h2
                      className="text-2xl font-black text-white mb-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      data-oid="kv:7kq_"
                    >
                      Contact Us
                    </motion.h2>
                    <motion.p
                      className="text-gray-300 text-sm"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      data-oid="9lxgdk5"
                    >
                      Ready to join the digital revolution? Drop us a message.
                    </motion.p>
                  </div>

                  {/* Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    data-oid="x7uvfae"
                  >
                    <div className="space-y-4" data-oid="gpc0gy-">
                      {/* Name Field */}
                      <div className="relative" data-oid="h3o40az">
                        <div
                          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                          data-oid="1e_7k9y"
                        >
                          <User
                            className="h-4 w-4 text-green-400"
                            data-oid="1u-n5ac"
                          />
                        </div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                          required
                          data-oid="tw0rsl8"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="relative" data-oid="wtgpre:">
                        <div
                          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                          data-oid="_w0ptzb"
                        >
                          <Mail
                            className="h-4 w-4 text-green-400"
                            data-oid="06w13pt"
                          />
                        </div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                          required
                          data-oid="3v6ges5"
                        />
                      </div>

                      {/* Message Field */}
                      <div className="relative" data-oid=".ix6wg4">
                        <div
                          className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none"
                          data-oid="u0fcfza"
                        >
                          <MessageSquare
                            className="h-4 w-4 text-green-400"
                            data-oid="fv32cye"
                          />
                        </div>
                        <Textarea
                          name="message"
                          placeholder="Your message..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          className="pl-10 bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 resize-none"
                          required
                          data-oid="d2.1i4s"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4" data-oid="g.16.qr">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 hover:from-green-300 hover:via-green-400 hover:to-emerald-300 text-black font-bold py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
                        data-oid="vafondd"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              data-oid="0ji5zfa"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" data-oid="uvvs8a3" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onClose();
                        }}
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-6 rounded-xl"
                        data-oid="h_-.ixs"
                      >
                        Cancel
                      </Button>
                    </div>
                  </motion.form>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
