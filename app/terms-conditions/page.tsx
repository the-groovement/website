import { getPaginatedPosts } from "@/lib/sanity/client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function TermsConditions() {
  const POSTS_PER_PAGE = 6;
  const posts = await getPaginatedPosts(0, POSTS_PER_PAGE);
  return (
    <div>
      <section>
        <div className="flex flex-col pb-8 md:pb-12 mt-2 sm:mt-8">
          <p
            className="text-[40px] sm:text-7xl mb-4 font-shrikhand"
            style={{ textShadow: "1px 1px 3px #3a2a3c" }}
          >
            terms & conditions
          </p>
        </div>
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <p className="font-bold">
              SHOWTIMES, VENUES, AND DATES ARE SUBJECT TO CHANGE
            </p>
            <p>
              The groovement LLC., “the groovement,” does not guarantee the
              content, accuracy, safety, integrity, or quality of any content or
              event published on the platform. The groovement is not liable in
              any way for any loss or damage of any kind incurred as a result of
              content submitted, uploaded, posted, emailed, displayed,
              transmitted, or otherwise made available on the platform or on
              social media. Email boogie@thegroovement.co to request account
              deletion or to submit notifications of any misuse of the platform.
              We reserve the right to cancel or suspend an account at any time.
            </p>
            <p>
              These terms and conditions contain legal obligations. Please read
              these terms and conditions carefully before using this site.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">DISCLAIMER</p>
            <p>
              You expressly understand and agree that: (a) this site and any of
              the services are provided on an “as is” and “as available” basis
              and that this site makes no warranties, representations, or
              conditions (as used in this section “warranties”) of any kind,
              whether express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose
              and non-infringement, and that any such warranties are hereby
              expressly disclaimed, and (b) this site specifically makes no
              warranties that it or any of its services, including any content,
              information, products, or services obtained from or through the
              use of this site or any of the services, will be provided on an
              uninterrupted, timely, secure, or error-free basis or that such
              services or the results derived therefrom will meet your
              requirements or expectations.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">BILLING INFORMATION VERIFICATION</p>
            <p>
              Orders are processed only after a billing address, and other
              billing information, has been verified. Occasionally, we receive
              incorrect billing or credit card account information for a ticket
              order that can delay processing and delivery. In these cases,
              Customer Service will attempt to contact you, using the
              information provided at the time of purchase. If Customer Service
              is unable to reach you after its initial attempt, Customer Service
              may cancel your order and may sell your tickets to another
              customer without further notice.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">PRICING AND OTHER ERRORS</p>
            <p>
              If the amount you pay for a ticket is incorrect regardless of
              whether because of an error in a price posted on this website or
              otherwise communicated to you, or you are able to order a ticket
              before its scheduled on-sale or presale date or you are able to
              order a ticket that was not supposed to have been released for
              sale, then: The Promoter will have the right to cancel that ticket
              (or the order for that ticket) and refund to you the amount that
              you paid. This will apply regardless of whether because of human
              error or a transactional malfunction of this website.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-bold">UNLAWFUL RE-SALE OF TICKETS</p>
            <p>
              Unlawful resale of tickets (or attempted resale) is grounds for
              seizure and cancellation without compensation. A ticket shall not
              be used for advertising, promotions, contests, or sweepstakes
              unless formal written authorization is given by the Event
              Promoter, provided that even if such consent is obtained, any use
              of Event Promoter’s trademarks and other intellectual property is
              subject to the Event Promoter’s consent.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">
              PERFORMERS/ARTISTS/ACTS/PLAYERS SUBJECT TO CHANGE
            </p>
            <p>
              Performers, Artists, Acts, Players are subject to change or
              cancellation at any time without notice. No refund will be owed if
              any performer, artist, act, player, or any other scheduled
              performance, person, or group is changed or canceled, and the
              event still occurs.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">NO REFUND OR EXCHANGE</p>
            <p>
              All purchases are non-refundable and not able to be exchanged.
              Notwithstanding, some promoters have different rules regarding the
              ability to refund and/or exchange your purchased tickets. Please
              refer to each event site for specific exclusions.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">RAIN OR SHINE</p>
            <p>
              Unless otherwise determined by the specific event promoter, all
              events are considered RAIN or SHINE. No refunds will be given due
              to inclement weather.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">CANCELLED/POSTPONED EVENTS</p>
            <p>
              Occasionally, events are canceled or postponed by the promoter,
              team, band, or venue. Should this occur, we will attempt to
              contact you to inform you of refund or exchange procedures for
              that event. For exact instructions on any canceled or postponed
              event, please check the event information online or contact us. If
              a refund is issued, then the Promoter will most likely give you a
              refund by issuing a credit to the credit card that you used to
              purchase that ticket, and the holder of the ticket will not be
              able to physically present it for a refund.
            </p>
            <p>
              Customer Service typically only offers refunds and/or exchanges
              based on the promoter’s, team’s, or venue’s instructions. Customer
              Service is not obligated to issue a refund except to the extent
              that the promoter, team, or venue responsible for bringing you the
              event (1) instructs us to issue a refund and (2) provides us with
              the ticket funds necessary to issue refunds. In order to receive a
              refund or an exchange that may be offered, you will have to comply
              with the promoter’s, team’s, or venue’s instructions or deadlines,
              which, along with the decision about whether or not to issue a
              refund or an exchange, may be at the promoter’s, team’s, or
              venue’s discretion.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">LIMITATION OF LIABILITY</p>
            <p>
              You expressly understand and agree that in no event shall this
              site, including its affiliates and licensors, be liable for any
              damages whatsoever, including any direct, indirect, incidental,
              consequential, special or exemplary damages, and any damages for
              loss of profits, savings, goodwill or other intangible losses,
              regardless of whether this site had been advised of or could have
              foreseen the possibility of such damages, arising out of or in
              connection with: (a) the use, inability to use or performance of
              any of the services of this site, or (b) any unauthorized access
              to or modification to any of your content or transmissions, or (c)
              any other matter relating to this site or any of the services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
