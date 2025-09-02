import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Clients() {
  return (
    <section className="w-full bg-gray-50 py-12" id="feedback">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          O que os clientes dizem
        </h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-full md:basis-1/3">
              <div className="bg-white rounded-2xl  p-8 hover:shadow-xl transition h-full">
                <div className="text-5xl text-gray-900 mb-4">“</div>
                <p className="text-gray-800 text-lg mb-6">
                  Fui muito bem atendido, não tenho o que falar, Pois meu
                  problema foi sanado, você está procurando profissionais com
                  qualidade garantia e economia para o seu bolso, encontrou o
                  ponto exato eu indico.
                </p>
                <div className="font-bold text-lg text-gray-900">
                  Adelmo Camilo ⭐⭐⭐⭐⭐
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/3">
              <div className="bg-white rounded-2xl  p-8 hover:shadow-xl transition h-full">
                <div className="text-5xl text-gray-900 mb-4">“</div>
                <p className="text-gray-800 text-lg mb-6">
                  Sempre que precisei fui bem atendido, correspondeu a
                  expectativa de um serviço de ótima qualidade, preço acessível,
                  profissionalismo nota dez, posso indicar sem medo de não ter
                  feito uma ótima recomendação.
                </p>
                <div className="font-bold text-lg text-gray-900 ">
                  Pedro Renato ⭐⭐⭐⭐⭐
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/3">
              <div className="bg-white rounded-2xl  p-8 hover:shadow-xl transition h-full">
                <div className="text-5xl text-gray-900 mb-4">“</div>
                <p className="text-gray-800 text-lg mb-12">
                  Um bom trabalho feito no cell da minha filha, pessoas educadas
                  e atenciosas. Me entregaram no prazo combinado e um bom custo
                  e benefício, recomendo a todos.
                </p>
                <div className="font-bold text-lg text-gray-900">
                  Flavio Alemeira ⭐⭐⭐⭐⭐
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/3">
              <div className="bg-white rounded-2xl  p-8 hover:shadow-xl transition h-full">
                <div className="text-5xl text-gray-900 mb-4">“</div>
                <p className="text-gray-800 text-lg mb-12">
                  Meu celular estava travando muito e a bateria não durava nada.
                  Levei na loja e eles trocaram rapidinho. Atendimento excelente
                  e preço justo. Voltarei com certeza!
                </p>
                <div className="font-bold text-lg text-gray-900">
                  Mariana Souza ⭐⭐⭐⭐
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/3">
              <div className="bg-white rounded-2xl  p-8 hover:shadow-xl transition h-full">
                <div className="text-5xl text-gray-900 mb-4">“</div>
                <p className="text-gray-800 text-lg mb-12">
                  Que profissionalismo! Expliquei o problema do meu aparelho e
                  em poucas horas já estava pronto. Além disso, me deram dicas
                  de como conservar melhor a bateria. Super recomendo!
                </p>
                <div className="font-bold text-lg text-gray-900">
                  Ricardo Lima ⭐⭐⭐⭐⭐
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
