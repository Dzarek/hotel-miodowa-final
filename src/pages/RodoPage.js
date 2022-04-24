import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { TiInfoLarge } from "react-icons/ti";
import { BiCookie } from "react-icons/bi";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const RodoPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <div className="title">
        <h1>
          <TiInfoLarge />
        </h1>
        <h2>
          {" "}
          <TiInfoLarge />
        </h2>
        <h3>
          {" "}
          <TiInfoLarge />
        </h3>

        <h2 data-aos="fade-up">
          {polish ? "rodo i cookies" : "rodo and cookies"} <br />
        </h2>
        <h3>
          {" "}
          <BiCookie />
        </h3>
        <h2>
          {" "}
          <BiCookie />
        </h2>
        <h1>
          {" "}
          <BiCookie />
        </h1>
      </div>
      <h4>RODO</h4>
      {polish ? (
        <>
          <div className="content">
            <h3>Szanowni Państwo,</h3>
            <p>
              Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
              2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
              fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
              swobodnego przepływu takich danych oraz uchylenia dyrektywy
              95/46/WE (Rozporządzenie ogólne o ochronie danych, zwane dalej:
              RODO), Hotel Miodowa informuje, że:
            </p>
            <p>
              1. Administratorem Pani/Pana danych osobowych jest Eko – Test
              Szczakowa Spółka z ograniczoną odpowiedzialnością Nieruchomości
              Spółka Komandytowa z siedzibą przy ul. Szklarkiej 5, 43-602
              Jaworzono, kontakt e mail: biuro@hotelmiodowa.pl .
            </p>
            <p>
              2. Administrator wyznaczył Inspektora ochrony danych osobowych
              Jerzego Górę, z którym może Pani/Pan skontaktować się poprzez
              e-mail: biuro@hotelmiodowa.pl lub pisemnie na adres siedziby
              Administratora. Z inspektorem ochrony danych osobowych można
              kontaktować się we wszystkich sprawach dotyczących przetwarzania
              danych osobowych oraz korzystania z praw związanych z
              przetwarzaniem danych.
            </p>
            <p>
              3. Pani/Pana dane osobowe przetwarzane będą na podstawie Art. 6
              ust. 1 lit. b, f RODO – przetwarzanie jest niezbędne do wykonania
              umowy, której stroną jest osoba, której dane dotyczą, lub do
              podjęcia działań na żądanie osoby, której dane dotyczą, przed
              zawarciem umowy; prawnie uzasadniony interes realizowany przez
              administratora danych.
            </p>
            <p>
              4. Pani/ Pana dane osobowe przetwarzane będą w celu realizacji
              umowy noclegu, a w szczególności: wystawienia niezbędnych
              dokumentów skorzystania z naszych usług (kart meldunkowej,
              faktury, paragonu) oraz dokonywania płatności gotówkowych i
              bezgotówkowych, obsługi zgłoszeń które są kierowane drogą
              telefoniczną, mailową, wykorzystywania przez nas danych
              kontaktowych w celu związanym ze świadczeniem usług wynikających z
              zawartej umowy świadczenia usług, obsługi reklamacji i skarg –
              jeżeli zostaną złożone; w celach podatkowych i rachunkowych, W
              zakresie danych gromadzonych przez monitoring celem jest
              zapewnienie bezpieczeństwa osób przebywających na terenie
              monitorowanym (w tym bezpieczeństwa pracowników) oraz ochrona
              mienia, ochrona przeciwpożarowa i przeciw-powodziowa.
            </p>
            <p>
              5. Prawnie uzasadnionym celem Administratora danych jest:
              prowadzenie własnych usług, podtrzymywania relacji z klientem,
              prowadzenie analiz statystycznych, zapewnienie obsługi płatniczej,
              windykacja należności, archiwizacja danych w celu zapewnienia
              rozliczalności i spełnienia obowiązków wynikających z przepisów
              prawa.
            </p>
            <p>
              6. Pani/Pana dane będą udostępniane podmiotom upoważnionym na
              podstawie powszechnie obowiązujących przepisów prawa bądź firmą
              świadczącym obsługę prawną.
            </p>
            <p>
              7. Pani/Pana dane osobowe będą przechowywane przez okres
              obowiązywania umowy z Państwem, a także po jej zakończeniu w celu:
              dochodzenia roszczeń w związki z wykonywaniem warunków umowy,
              wykonywania obowiązków wynikających z przepisów prawa w tym
              podatkowych i rachunkowych, zapobiegania nadużyciom i oszustwom,
              statystycznych i archiwizacyjnych, maksymalnie przez 6 lat od
              zakończenia wykonywania umowy o świadczenie usług.
            </p>
            <p>
              8. Pani/Pana dane osobowe w zakresie zapisu monitoringu będą
              przechowywane aż do nadpisania (w zależności od wielkości nagrań)
              maksymalnie do 30 dni lub do czasu prawomocnego zakończenia
              postępowania prowadzonego na podstawie prawa.
            </p>
            <p>
              9. Monitoring wizyjny obejmuje: recepcję hotelu, hol, korytarze,
              klatkę schodową, bar, jadalnie, wejścia do wind, wjazd do hotelu,
              teren zielony.
            </p>
            <p>
              10. Osoba, której dane są przetwarzane, ma prawo do żądania od
              administratora dostępu do danych osobowych, prawo do ich
              sprostowania, usunięcia lub ograniczenia przetwarzania, prawo do
              wniesienia sprzeciwu wobec przetwarzania, prawo do przenoszenia
              danych.
            </p>
            <p>
              11. W przypadku gdy przetwarzanie danych osobowych odbywa się na
              podstawie zgody osoby na przetwarzanie danych osobowych (art. 6
              ust. 1 lit a RODO), przysługuje jej prawo do cofnięcia tej zgody w
              dowolnym momencie.
            </p>
            <p>
              12. W przypadku powzięcia informacji o niezgodnym z prawem
              przetwarzaniu przez Administratora danych osobowych, przysługuje
              Pani/Panu prawo wniesienia skargi do organu nadzorczego tj.
              Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
            <p>
              13. Podanie przez Panią/Pana danych osobowych jest obowiązkiem
              ustawowym, gdy przesłanką przetwarzania jest przepis prawa lub
              warunkiem koniecznym zawarcia umowy bądź załatwienia indywidualnej
              sprawy.
            </p>
            <p>
              14. Administrator nie przewiduje przetwarzania Pani/ Pana danych w
              sposób zautomatyzowany, w tym ich profilowania.
            </p>
            <p>
              15. Administrator nie przewiduje przekazywania Pani/ Pana danych
              do państw trzecich w rozumieniu RODO.
            </p>
          </div>
          <h4>Polityka Cookies</h4>
          <div className="content">
            <p>
              Serwis nie zbiera w sposób automatyczny żadnych informacji, z
              wyjątkiem informacji zawartych w plikach cookies. Pliki cookies
              (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności
              pliki tekstowe, które przechowywane są w urządzeniu końcowym
              Użytkownika Serwisu i przeznaczone są do korzystania ze stron
              internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony
              internetowej, z której pochodzą, czas przechowywania ich na
              urządzeniu końcowym oraz unikalny numer.
            </p>
            <p>
              Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
              Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
              operator Serwisu – Eko – Test Szczakowa Spółka z ograniczoną
              odpowiedzialnością Nieruchomości Spółka Komandytowa z siedzibą
              przy ul. Szklarkiej 5, 43-602 Jaworzono.
            </p>
            <p>
              Pliki cookies wykorzystywane są w celu: <br /> 1. Dostosowania
              zawartości stron internetowych Serwisu do preferencji Użytkownika
              oraz optymalizacji korzystania ze stron internetowych; w
              szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika
              Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną
              do jego indywidualnych potrzeb; <br /> 2. Tworzenia statystyk,
              które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu
              korzystają ze stron internetowych, co umożliwia ulepszanie ich
              struktury i zawartości;
            </p>
            <p>
              W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
              cookies: „sesyjne” (session cookies) oraz „stałe” (persistent
              cookies). Cookies „sesyjne” są plikami tymczasowymi, które
              przechowywane są w urządzeniu końcowym Użytkownika do czasu
              wylogowania, opuszczenia strony internetowej lub wyłączenia
              oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies
              przechowywane są w urządzeniu końcowym Użytkownika przez czas
              określony w parametrach plików cookies lub do czasu ich usunięcia
              przez Użytkownika.
            </p>
            <p>
              W wielu przypadkach oprogramowanie służące do przeglądania stron
              internetowych (przeglądarka internetowa) domyślnie dopuszcza
              przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
              Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
              dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
              szczególności w taki sposób, aby blokować automatyczną obsługę
              plików cookies w ustawieniach przeglądarki internetowej bądź
              informować o ich każdorazowym zamieszczeniu w urządzeniu
              Użytkownika Serwisu. Szczegółowe informacje o możliwości i
              sposobach obsługi plików cookies dostępne są w ustawieniach
              oprogramowania (przeglądarki internetowej).
            </p>
            <span>
              Treść Polityki cookies na tej stronie powstała dzięki uprzejmości
              IAB Polska, które udostępniło jej wzór (© IAB Polska) na stronie
              www.wszystkoociasteczkach.pl.
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="content">
            <h3> Ladies and Gentlemen, </h3>
            <p>
              Pursuant to Regulation (EU) 2016/679 of the European Parliament
              and of the Council of 27 April 2016 on the protection of
              individuals with regard to the processing of personal data and on
              the freemovement of such data, and repealing Directive 95/46 / EC
              (General Regulation on the Protection of data, hereinafter
              referred to as: RODO), Hotel Miodowa informs that:
            </p>
            <p>
              1. The administrator of your personal data is Eko – Test Szczakowa
              Spółka z ograniczoną odpowiedzialnością Nieruchomości Spółka
              Komandytowa with its registered office at ul. Szklarkiej 5, 43-602
              Jaworzno, contact e-mail: biuro@hotelmiodowa.pl.
            </p>
            <p>
              2. The administrator has appointed the Personal Data Protection
              Inspector Jerzy Góra, who you can contact by e-mail:
              biuro@hotelmiodowa.pl or in writing to the address of the
              Administrator's seat. You can contact the Data Protection Officer
              in all matters regarding the processing of personal data and the
              exercise of rights related to data processing.
            </p>
            <p>
              3. Your personal data will be processed on the basis of Art. 1
              lit. b, f RODO - processing is necessary to perform a contract to
              which the data subject is a party or to take action at the request
              of the data subject before concluding the contract; legitimate
              interest pursued by the data controller.
            </p>
            <p>
              4. Your personal data will be processed for the purpose of
              implementing the accommodation contract, in particular: issuing
              the necessary documents for using our services (registration card,
              invoice, receipt) and for making cash and non-cash payments,
              handling requests that are sent by phone, e-mail, our use of
              contact details for purposes related to the provision of services
              under the concluded service contract, handling complaints and
              complaints - if submitted; for tax and accounting purposes, in the
              scope of data collected by monitoring, the purpose is to ensure
              the safety of persons staying in the monitored area (including
              employee safety) as well as property protection, fire and flood
              protection.
            </p>
            <p>
              5. The legitimate purpose of the Data Administrator is: conducting
              own services, maintaining customer relations, conducting
              statistical analyzes, providing payment services, debt collection,
              archiving data to ensure accountability and fulfill obligations
              arising from legal provisions.
            </p>
            <p>
              6. Your data will be made available to entities authorized under
              generally applicable law or a company providing legal services.
            </p>
            <p>
              7. Your personal data will be stored for the duration of the
              contract with you, as well as after its termination for the
              purpose of: pursuing claims in connection with the performance of
              contract conditions, performance of obligations arising from legal
              provisions, including tax and accounting, preventing fraud and
              fraud, statistical and archiving, up to a maximum of 6 years from
              the end of the performance of the service contract.
            </p>
            <p>
              8. Your personal data in the scope of recording monitoring will be
              stored until overwriting (depending on the size of recordings) up
              to 30 days or until the final termination of the proceedings
              conducted on the basis of law.
            </p>
            <p>
              9. Video monitoring includes: hotel reception, hall, corridors,
              staircase, bar, dining rooms, elevator entrances, hotel entrance,
              green area.
            </p>
            <p>
              10. The person whose data is processed has the right to request
              the administrator to access personal data, the right to rectify
              it, delete or limit processing, the right to object to the
              processing, the right to transfer data.
            </p>
            <p>
              11. If the processing of personal data is based on the consent of
              the person for the processing of personal data (Article 6
              paragraph 1 point a of the GDPR), he has the right to withdraw
              this consent at any time.
            </p>
            <p>
              12. If you become aware of an unlawful processing of personal data
              by the Administrator, you have the right to lodge a complaint to
              the supervisory body, i.e. the President of the Office for
              Personal Data Protection.
            </p>
            <p>
              13. Providing personal data by you is a statutory obligation when
              the premise for processing is a legal provision or a necessary
              condition to conclude a contract or settle an individual case.
            </p>
            <p>
              14. The Administrator does not provide for the processing of your
              data in anautomated manner, including their profiling.
            </p>
            <p>
              15. The Administrator does not provide for the transfer of your
              data to third countries within the meaning of the GDPR.
            </p>
          </div>
          <h4> Cookies Policy </h4>
          <div className="content">
            <p>
              The website does not automatically collect any information, except
              for the information contained in cookies. Cookies are IT data, in
              particular files text files that are stored on the User's end
              device website and are intended for the use of websites Service.
              Cookies usually contain the name of the website, which they come
              from, their storage time on the end device and a unique number.
            </p>
            <p>
              The entity that places on the Website User's end device cookies
              and accessing them is the operator of the Website - Eko – Test
              Szczakowa Spółka z ograniczoną odpowiedzialnością Nieruchomości
              Spółka Komandytowa z siedzibą przy ul. Szklarkiej 5, 43-602
              Jaworzono.
            </p>
            <p>
              Cookies are used for: <br /> 1. Customization the content of the
              Website pages to the User's preferences and optimizing the use of
              websites; in particular these files allow to recognize the device
              of the Website User and properly display the website, for to his
              individual needs; <br /> 2. Create statistics that help understand
              how the Website Users use the pages websites, which allows
              improving their structure and content;
            </p>
            <p>
              The Website uses two basic types of cookies: Session cookies and
              persistent cookies. Cookies "Session" files are temporary files
              that are stored on the device end of the User until logging out,
              leaving the page website or disabling the software (browser
              website). Persistent cookies are stored on the device end User for
              the time specified in the cookie parameters or until they are
              removed by the User.
            </p>
            <p>
              In many cases, web browsing software Internet (web browser) allows
              by default storing cookies on the User's end device. The Website
              Users can change the settings at any time regarding cookies. These
              settings can be changed in in particular in such a way as to block
              the automatic handling of files cookies in the web browser
              settings or inform about them each time they are placed on the
              Website User's device. Detailed information on the possibilities
              and methods of handling cookies are available in the software (web
              browser) settings.
            </p>
            <span>
              The content of the Cookies Policy on this website was created
              courtesy of IAB Poland, which provided its pattern (© IAB Polska)
              on the website www.wszystkoociasteczkach.pl.
            </span>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    padding-top: 12vh;
  }
  h4 {
    text-decoration: uppercase;
    font-size: 2rem;
    color: var(--secondaryColor2);
    text-align: center;
    margin: 10vh auto 5vh;
  }
  .title {
    padding-top: 10vh;
    padding-bottom: 10vh;
    width: 100vw;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #444;
    text-shadow: none;
    h2 {
      color: var(--secondaryColor);
      letter-spacing: 10px;
      text-align: center;
      font-size: 2.8rem;
    }
    @media screen and (max-width: 800px) {
      h1:nth-of-type(2) {
        display: none;
      }

      h2:nth-of-type(3) {
        display: none;
      }
      h3:nth-of-type(2) {
        display: none;
      }
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.8rem;
        letter-spacing: 5px;
      }
      h3 {
        font-size: 1.8rem;
      }
    }
  }
  .content {
    width: 80vw;
    margin: 15vh auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: var(--textFont);
    h3 {
      margin-bottom: 5vh;
    }
    p {
      margin: 1vh auto 1vh 0;
      letter-spacing: 1.3;
    }
  }
`;

export default RodoPage;
