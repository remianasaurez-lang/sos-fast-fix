# FixNow SOS App

BUILD THIS IN UNDER 5 CREDITS / TOKENS .  FINISH THE PROJECT BEFORE EXHAUSTING THE DAILY CREDIT LIMIT . Build a fully functional DEMO web/mobile application called "FixNow SOS".

IMPORTANT:
This is a prototype/demo application, but it must FEEL like a real production app. Every major button, screen, navigation item, booking flow, status update, and interaction should actually work.

The concept is:
"FixNow SOS — Emergency Repair. One Tap Away."

FixNow SOS is an on-demand emergency repair platform similar to Urban Company, but focused on QUICK and EMERGENCY repair services for electronic devices, home appliances, electrical issues, plumbing, AC, and vehicle breakdowns.

The core promise:
"When waiting isn't an option."

A customer can open the app, select a repair/service, enter their problem, confirm their location, book a technician, see the technician being assigned, track the technician, see the booking status, complete the service, make a demo payment, and rate/review the technician.

Use the attached UI image as the primary visual/design reference. Do NOT copy it pixel-for-pixel; use it as inspiration for the layout, hierarchy, colors, cards, typography, and mobile-first experience.

==================================================
1. BRANDING & VISUAL DESIGN
==================================================

Brand:
FixNow SOS

Tagline:
"Emergency Repair. One Tap Away."

Secondary tagline:
"When waiting isn't an option."

Visual identity:
- Premium modern emergency-service startup
- Black / very dark navy background for splash and hero sections
- White surfaces for app screens
- Bright red as primary action/emergency color
- Small amount of electric blue/green for status indicators
- Rounded cards
- Soft shadows
- Clean modern typography
- Large touch-friendly buttons
- Professional iconography
- Smooth micro-interactions
- Mobile-first design
- Responsive desktop layout

Use red primarily for:
- Emergency buttons
- Book Now
- Important alerts
- SOS indicators
- Cancellation/destructive actions

Do not make the UI look like a generic ecommerce website.

The product should feel like a combination of:
Urban Company + Uber tracking + emergency service app.

==================================================
2. APPLICATION STRUCTURE
==================================================

Create these major sections:

1. Splash / Landing
2. Login / Signup
3. Home
4. Service Selection
5. Service Details / Problem Description
6. Location Selection
7. Technician Matching
8. Booking Confirmation
9. Live Tracking
10. Payment
11. Service Completed
12. Rating & Review
13. Booking History
14. Profile
15. Help & Support

Bottom navigation on mobile:
- Home
- Bookings
- Wallet
- Profile

==================================================
3. SPLASH SCREEN
==================================================

Create a premium splash screen inspired by the attached reference.

Show:

FixNow
SOS

"Emergency Repair. One Tap Away."

Visual:
- Night city / emergency repair aesthetic
- Technician repairing a car/device
- Red emergency glow
- Lightning bolt motif

Show 4 benefit indicators:

⚡ Fast Response
🛡 Verified Technicians
🕐 24/7 Support
📍 Real-Time Tracking

Primary CTA:
"Get Started →"

Secondary:
"Log In"

Clicking Get Started should take the user to Login/Signup.

==================================================
4. LOGIN / SIGNUP
==================================================

Create a functional demo authentication screen.

Options:
- Continue with Phone
- Continue with Email
- Google (demo button)

For demo purposes:
Allow any valid-looking phone/email to continue.

Ask:
- Name
- Phone number
- Email
- Location permission

After signup, save the demo user locally.

Use localStorage/state so refreshing the page does not immediately destroy the demo session.

Create a demo user such as:

Name: Ayushman Sharma
Email: ayushman99@gmail.com

==================================================
5. HOME SCREEN
==================================================

Create a home screen closely inspired by the attached reference.

Top:
"Good Morning,"
"Your Name"

Location:
📍 Agra ▼

Notification icon
Profile avatar

Main emergency banner:

"Emergency?
We're Just a Tap Away."

"Get a technician to your location in minutes."

CTA:
"Book Now →"

Show "24/7"

Then:

"Select a Service"

Create service cards:

1. 📱 Mobile Repair
   Screen, battery, charging, software

2. 💻 Laptop & Computer
   Hardware, software, overheating

3. 📺 TV Repair
   Display, sound, power issues

4. 🧊 Refrigerator
   Cooling, compressor, electrical

5. 🧺 Washing Machine
   Motor, drainage, vibration

6. ❄️ AC Repair
   Cooling, gas, installation

7. ⚡ Electrical
   Power failures, wiring, faults

8. 🚰 Plumbing
   Leakage, pipe, fittings

9. 🚗 Car Breakdown
   Battery, tyre, towing, fuel

10. 🔌 Other Electronics
   Router, microwave, speaker, etc.

Below services show:

✓ Verified Technicians
₹ Transparent Pricing
📍 Live Tracking

Bottom navigation:
Home | Bookings | Wallet | Profile

==================================================
6. SERVICE SELECTION
==================================================

When a user clicks a service, open a dedicated service-selection screen.

Example:
"Mobile Repair"

Show common problems:

- Broken Screen
- Battery Problem
- Charging Problem
- Phone Not Turning On
- Speaker/Microphone
- Software Issue
- Water Damage
- Other

Each should be selectable.

Also include:

"Describe your problem"

Textarea:
"Tell us what is wrong..."

Allow optional image upload.

Show estimated response time:
"Technician arrival: 10–20 min"

Show:
"Inspection fee: ₹99"
or service-specific estimated pricing.

IMPORTANT:
Do not immediately charge the user.

CTA:
"Continue →"

==================================================
7. LOCATION SCREEN
==================================================

Create a location confirmation screen.

Show:
"Where should we send the technician?"

Use a realistic-looking map placeholder/design.

For the demo, default location:
Agra, Uttar Pradesh

Allow:
- Current Location
- Search location
- Saved addresses

Create sample addresses:

Home
Sanjay Place, Agra

College
St. John's College, Agra

Office
MG Road, Agra

User can select an address.

CTA:
"Confirm Location"

==================================================
8. BOOKING SUMMARY
==================================================

Create a professional booking summary.

Example:

SERVICE
Mobile Repair

PROBLEM
Screen Damage

LOCATION
Sanjay Place, Agra

RESPONSE
10–15 minutes

ESTIMATED VISIT FEE
₹99

ESTIMATED REPAIR COST
₹499–₹2,999

Show note:
"Final repair cost will be confirmed by the technician after inspection."

Buttons:

"Confirm Emergency Booking"

"Back"

When Confirm Emergency Booking is clicked:
Create a real demo booking object in application state/localStorage.

Generate a booking ID such as:

FN742598

==================================================
9. TECHNICIAN MATCHING SCREEN
==================================================

After booking, show a realistic matching animation.

Screen:

"Finding the nearest technician..."

Animated radar/search effect.

Then after approximately 2–3 seconds:

"Technician Found!"

Show technician card:

Rohit Kumar
Car & Electronics Technician

⭐ 4.8
124 jobs completed

"Verified Technician"

"8 min away"

Show:
✓ Identity Verified
✓ Background Verified
✓ 124+ Services

CTA:
"Track Technician"

Also provide:
"Call"
"Message"

For the demo, technician assignment should automatically happen.

==================================================
10. BOOKING CONFIRMATION
==================================================

Create a confirmation page similar to the reference image.

Large green success icon.

"Booking Confirmed!"

"Your technician is on the way."

Show:

Booking ID:
#FN742598

Service:
Mobile Repair

Technician:
Rohit Kumar

Rating:
⭐ 4.8 (124 jobs)

Arrival:
8 min approx.

Location:
Sanjay Place, Agra

CTA:
"Track Live"

Secondary:
"View Service Details"

==================================================
11. LIVE TRACKING SCREEN
==================================================

This is one of the MOST IMPORTANT screens.

Create a realistic map-style interface.

Show:
- Customer location pin
- Technician location pin/avatar
- Route line
- Nearby landmarks
- Technician moving toward customer

Top status:

"Technician Arriving in 8 min"

Technician card:

Rohit Kumar
⭐ 4.8
124 jobs
Verified Technician

Buttons:

📞 Call
💬 Message
❌ Cancel

Bottom timeline:

Booked
9:41 AM

On the way
9:43 AM

Arriving
9:51 AM

For the demo, clicking / waiting should simulate technician movement.

Create a fake route and automatically update:

8 min → 6 min → 4 min → 2 min → Arrived

The route/location can be simulated using frontend state. It does NOT need a real GPS backend.

Add animation to the technician marker.

==================================================
12. TECHNICIAN ARRIVED
==================================================

Once the simulated ETA reaches 0:

Change status to:

"Technician has arrived"

Show:

"Rohit Kumar is at your location."

Button:
"Start Service"

When clicked:
Status becomes:

"Repair in Progress"

Show:
"Technician is inspecting your device."

==================================================
13. REPAIR IN PROGRESS
==================================================

Create service-progress screen.

Show:

Repair Status

✓ Technician Arrived
✓ Diagnosis Started
● Repair In Progress
○ Payment
○ Completed

Show technician information.

Add sample diagnosis:

"Charging port damaged"

Estimated repair:
₹699

Buttons:

"Approve Repair"

"Contact Technician"

When Approve Repair is clicked:
Move to repair completion.

==================================================
14. PAYMENT SCREEN
==================================================

Create a realistic payment page.

Breakdown:

Inspection Fee       ₹99
Repair Cost          ₹699
Service Charge       ₹50
---------------------------
Total                ₹848

Payment methods:

UPI
Credit/Debit Card
Cash

For demo purposes, payment must NOT connect to a real payment gateway.

Clicking "Pay ₹848" should simulate successful payment.

Show:

✓ Payment Successful

Transaction ID:
FNTRX928374

==================================================
15. SERVICE COMPLETED
==================================================

Show:

🎉 Repair Completed!

"Your device is working again."

Show technician:

Rohit Kumar
⭐ 4.8

Total Paid:
₹848

Buttons:

"Rate Technician"

"View Receipt"

"Book Another Service"

==================================================
16. RATING & REVIEW
==================================================

Create rating screen matching the attached reference.

Title:

"Rate Your Technician"

Technician:
Rohit Kumar

Allow 1–5 stars.

Feedback tags:

On Time
Professional
Polite
Helpful
Clean Work
Good Service
Other

Textarea:
"Add a comment (optional)..."

Submit button:
"Submit Review"

After submission:

"Thank you for your feedback!"

Update technician rating/review count in local demo state.

==================================================
17. BOOKINGS SCREEN
==================================================

Create booking history.

Tabs:

Active
Completed
Cancelled

Example active booking:

#FN742598
Mobile Repair
Rohit Kumar
On the way
8 min

Completed examples:

#FN739821
Laptop Repair
Completed
₹1,249

#FN728491
AC Repair
Completed
₹1,899

Clicking a booking should open full booking details.

==================================================
18. PROFILE SCREEN
==================================================

Create profile screen inspired by the reference.

Profile:

Ayushman Sharma
ayushman99@gmail.com

Premium Member

Stats:

12
Total Bookings

4.8
Average Rating

3
Services Used

Menu:

My Bookings
Saved Addresses
Payment Methods
Help & Support
About FixNow SOS
Log Out

Make every item clickable.

==================================================
19. WALLET / PAYMENT METHODS
==================================================

Create a demo wallet page.

Wallet Balance:
₹1,250

Add Money button

Transaction history:

+₹500
Wallet top-up

-₹848
Mobile Repair

-₹199
Electrical Repair

Also show payment methods:

UPI
**** 4821

Credit Card
**** 2198

These are demo only.

==================================================
20. HELP & SUPPORT
==================================================

Create:

"How can we help?"

Search box.

FAQs:

How does FixNow work?
How quickly will a technician arrive?
Are technicians verified?
How is pricing calculated?
Can I cancel a booking?
What if the technician cannot fix my device?

Support options:

📞 Call Support
💬 Chat Support
📧 Email Support

Make buttons interactive using demo behavior.

==================================================
21. EMERGENCY SOS FLOW
==================================================

The "SOS" branding should have an important role.

Create a floating / prominent emergency button:

"⚡ SOS — Need Help Now"

When clicked:

"What's wrong?"

Show fast categories:

Phone
Laptop
TV
Appliance
Electrical
Car
Other

Then:

"Use my saved location"

and:

"Find Technician Now"

This should skip unnecessary steps and create an emergency booking.

==================================================
22. DEMO DATA
==================================================

Use realistic mock data.

Technicians:

Rohit Kumar
Rating: 4.8
Jobs: 124
Distance: 2.4 km
ETA: 8 min

Aman Verma
Rating: 4.7
Jobs: 98

Vikas Singh
Rating: 4.9
Jobs: 210

Neeraj Sharma
Rating: 4.6
Jobs: 87

Services should have:
- name
- category
- icon
- description
- estimated price
- estimated response time

Bookings should contain:
- booking ID
- customer
- service
- problem
- technician
- location
- status
- ETA
- price
- payment status
- timestamp

==================================================
23. FUNCTIONAL STATE MACHINE
==================================================

This is extremely important.

Implement booking status as:

idle
→ service_selected
→ problem_selected
→ location_confirmed
→ booking_created
→ searching
→ technician_assigned
→ confirmed
→ technician_on_way
→ technician_arrived
→ repair_started
→ repair_approved
→ repair_completed
→ payment_pending
→ payment_completed
→ rated
→ completed

Every button must update the correct state.

Do NOT create fake buttons that do nothing.

The entire booking journey must be demonstrable from beginning to end.

==================================================
24. DEMO MODE
==================================================

Create a "Demo Mode" optimized for presentation.

On the home page, optionally show a small:

"Demo Mode"

indicator.

Allow the complete journey to be demonstrated without:
- Real authentication
- Real payment
- Real GPS
- Real SMS
- Real technician backend

Everything can use mock data and local state.

But the UI should make it look like a real product.

==================================================
25. TECHNICIAN SIMULATION
==================================================

Create a simulated technician backend using frontend state.

When a booking is created:

1. Search animation
2. Assign nearest technician
3. Show technician details
4. Start ETA countdown
5. Move technician on map
6. Technician arrives
7. Start repair
8. Complete repair
9. Generate invoice
10. Payment
11. Rating

Add a small optional developer/demo control panel that allows:

"Simulate Technician Arrived"
"Simulate Repair Started"
"Simulate Repair Completed"

This is useful for presentations if the automatic timer is inconvenient.

Keep this control panel hidden behind a "Demo Controls" button so the customer-facing interface remains clean.

==================================================
26. DESKTOP PRESENTATION MODE
==================================================

Although the primary product is a mobile app, make the web version beautiful on desktop.

On desktop:
- Center the mobile application inside a realistic phone-like container OR provide a polished responsive application view.
- Add a subtle product showcase background.
- Maintain the same UI hierarchy.

On mobile:
- Full-screen app experience.

==================================================
27. ANIMATIONS
==================================================

Use subtle professional animations:

- Page transitions
- Button press animation
- Technician search animation
- Map marker movement
- ETA countdown
- Success checkmark animation
- Booking confirmation animation
- Skeleton loading where appropriate
- Toast notifications

Do not over-animate.

==================================================
28. COMPONENT ARCHITECTURE
==================================================

Build reusable components:

Navbar
BottomNavigation
ServiceCard
TechnicianCard
BookingCard
StatusTimeline
MapTracking
LocationCard
PaymentCard
RatingStars
ReviewTags
EmergencyBanner
SOSButton
Toast
Modal
LoadingState

Keep the code clean and modular.

==================================================
29. DATA PERSISTENCE
==================================================

Use localStorage for:

- Current user
- Login status
- Saved addresses
- Bookings
- Booking status
- Reviews
- Wallet transactions
- Payment methods

Refreshing the page should preserve the demo booking.

Provide a "Reset Demo" option inside Profile or Demo Controls so the presentation can be restarted.

==================================================
30. IMPORTANT USER EXPERIENCE
==================================================

The primary user journey must be extremely simple:

OPEN APP
↓
SELECT SERVICE
↓
SELECT PROBLEM
↓
CONFIRM LOCATION
↓
BOOK NOW
↓
TECHNICIAN FOUND
↓
TRACK TECHNICIAN
↓
TECHNICIAN ARRIVES
↓
REPAIR
↓
PAY
↓
RATE
↓
DONE

The user should never feel lost.

==================================================
31. PRICING
==================================================

Use transparent estimated pricing.

Example:

Mobile Repair
Visit fee: ₹99
Repair estimate: ₹499–₹2,999

Laptop Repair
Visit fee: ₹149
Repair estimate: ₹599–₹4,999

TV Repair
Visit fee: ₹149
Repair estimate: ₹699–₹5,999

AC Repair
Visit fee: ₹199
Repair estimate: ₹799–₹3,999

Electrical
Visit fee: ₹99
Repair estimate: ₹199–₹2,999

Plumbing
Visit fee: ₹99
Repair estimate: ₹199–₹2,999

Clearly state:
"Final price may vary after technician diagnosis."

==================================================
32. MICROCOPY
==================================================

Use strong startup-style copy throughout.

Examples:

"Help is on the way."
"Don't wait. Fix it now."
"Verified help. Fast response."
"Your technician is nearby."
"Track every step."
"Repair. Pay. Done."
"When waiting isn't an option."
"One tap. One technician. One solution."

==================================================
33. ERROR & EDGE CASES
==================================================

Handle:

- User tries to continue without selecting service
- User tries to book without location
- Booking cancellation
- Payment failure demo
- No technician found demo
- Empty booking history
- Invalid form fields

Show polished toast/error messages.

Example:

"Please select a service first."

"Please confirm your location."

"No technician is currently available. Try again in a moment."

==================================================
34. CANCELLATION
==================================================

Allow cancellation while technician is on the way.

Show confirmation modal:

"Cancel this booking?"

"Your technician has already started travelling."

Buttons:
"Keep Booking"
"Cancel Booking"

If cancelled:
Update status to Cancelled
Show cancellation confirmation
Move booking to Cancelled history.

==================================================
35. FINAL QUALITY REQUIREMENT
==================================================

This should NOT be a static UI mockup.

I need a FUNCTIONAL interactive prototype.

I should be able to open the application and demonstrate the entire FixNow SOS journey to judges/investors.

Test every major interaction yourself after implementation.

Make sure:
- Navigation works
- Buttons work
- Booking gets created
- Booking ID is generated
- Technician gets assigned
- ETA changes
- Tracking works
- Technician arrival works
- Repair status works
- Payment works in demo mode
- Rating works
- Booking history updates
- Profile works
- Local storage works
- Reset Demo works

Do not leave TODO placeholders.

Do not use lorem ipsum.

Use realistic Indian names, ₹ pricing, Indian locations, and Indian service context.

The final result should feel like a startup-ready MVP prototype for a pitch/demo event.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sos-fast-fix.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d96333d0-64be-4ca8-a3c0-2dc557753e08).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
