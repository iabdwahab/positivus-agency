function Contact() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-2 max-lg:text-center">
        <h5 className="bg-primary w-fit rounded-lg px-4 py-1 font-medium text-black max-lg:mx-auto">Contact us:</h5>
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p>
          Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
        </p>
      </div>

      <div className="text-md grid gap-2 rounded-xl bg-[#292A32] p-5 lg:p-8">
        <input type="email" placeholder="johndoe@example.com" className="border-gray outline-primary focus:border-primary rounded-lg border p-4 focus:outline-1" />
        <button className="bg-primary hover:text-primary duration-fast border-primary hover:bg-secondary cursor-pointer rounded-xl border px-8 py-4 font-medium text-black lg:w-fit">Subscribe to news</button>
      </div>
    </div>
  );
}
export default Contact;
