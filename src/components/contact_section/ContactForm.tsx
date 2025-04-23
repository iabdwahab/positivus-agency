function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="accent-primary text-lg" onSubmit={handleSubmit}>
      <div className="mb-4 flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="message-type" />
          <span>Say Hi</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="message-type" />
          <span>Get a Quote</span>
        </label>
      </div>

      <div className="mb-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="rounded-lg border bg-white px-4 py-2" placeholder="John Doe" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" className="rounded-lg border bg-white px-4 py-2" placeholder="johndoe@example.com" required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" className="h-40 rounded-lg border bg-white px-4 py-2" placeholder="Your message here..." required></textarea>
        </div>
      </div>

      <button className="bg-secondary hover:bg-primary hover:text-secondary border-secondary duration-fast w-full cursor-pointer rounded-xl border px-4 py-3 text-white">Send Message</button>
    </form>
  );
}
export default ContactForm;
