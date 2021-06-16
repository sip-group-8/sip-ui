
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Center,
    Box,
  } from "@chakra-ui/react"
  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"
  import { useDisclosure } from "@chakra-ui/react"
  import { Button, ButtonGroup, Lorem } from "@chakra-ui/react"    
  import { Input } from "@chakra-ui/react"
  import { Stack } from "@chakra-ui/react"
  import { Textarea } from "@chakra-ui/react"
  import { EmailIcon } from '@chakra-ui/icons'
  import NewHome2 from '../../components/slider';



export default function NewHome() {


    return (
      
        <div className="cont">
          <div className="cont2">
          <Box bg="rgb(16, 10, 49)" w="100%" p={4} color="rgb(16, 10, 49)" borderWidth="1px" borderRadius="lg">
            <h2 className="logo">NUESTRA EMPRESA</h2>
          </Box>
          </div>
          <Flex >
              <Center w="700px" >
                <div className="cont">
                      <NewHome2 />
                </div>
              </Center>
              <Center w="700px" >
                  <div className="banner-area">
                    <div>
                      <h1>Recursos Humanos</h1>
                      <p>Tenes alguna duda, alguna inquietud, alguna inquietud.       
                          <strong> ¡Contactanos!</strong>
                        </p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis ut quis, dolores eligendi recusandae facilis debitis quod eum doloremque, sunt labore minus assumenda officiis adipisci aspernatur laudantium numquam non.</p>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit enim repudiandae tenetur sequi eos assumenda, adipisci in sapiente corporis cum facilis minima natus laborum numquam? Temporibus ut magni ipsam consequatur.

                      </p>
                        <div className="App">
                          <CustomModal
                            showModalButtonText="Enviar Mensaje"
                            modalHeader="¿En que podemos ayudarlo?"
                            modalBody="Escriba el cuerpo del mensaje"
                          />
                        </div>
                    </div>
                  </div>
                  </Center>
            </Flex>   
            <div className="cont2">
              <Box bg="" w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <h2 className="logo">Novedades</h2>
              </Box>
            </div>
            <div className="cont2 mrg">
            <Flex >
              <Center  >
                <div className="card">       
                    <img className="card-img-top" src="https://i.ytimg.com/vi/sigge8kJ9wg/mqdefault.jpg" alt="Santander te invita a abrir una cuenta gratis y 100% online"/>       
                    <div className="card-body">                
                          <div className="news-title"> 
                              <h4>Hoy es el cumpleaños de Pablo Quiroz</h4>              
                                <CustomModal2
                                showModalButtonText="¡Saludalo!"
                                modalHeader="Mensaje"
                                modalBody="Escriba el cuerpo del mensaje"
                              />
                          </div>           
                          <p className="card-text "> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit ex maiores officia quidem cumque distinctio nulla, temporibus ratione enim cupiditate impedit, facilis debitis voluptatum, blanditiis perspiciatis modi dolorem atque.
                          </p>                             
                      </div>
                  </div> 
              </Center>
              <Center  >
                <a href="">
                  <div className="card">       
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGu8XKZcxsyp6-ZFwO9y5qnjEXZaMDVed9udCr-EVqssk_2xUShSKwEtedYnh8dzBa1iQ&usqp=CAU" alt="Santander te invita a abrir una cuenta gratis y 100% online"/>       
                      <div className="card-body">          
                          <div className="news-title">               
                              <h2 className="">Respondé las preguntas Diarias y Ganá puntos</h2>         
                          </div>           
                          <p className="card-text "> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit ex maiores officia quidem cumque distinctio nulla, temporibus ratione enim cupiditate impedit, facilis debitis voluptatum, blanditiis perspiciatis modi dolorem atque.
                          </p>           
                        </div>
                    </div> 
                  </a>
              </Center>
              <Center  >
              <a href="" >
                <div className="card">       
                  <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Santander te invita a abrir una cuenta gratis y 100% online"/>       
                    <div className="card-body">                
                        <div className="news-title">               
                            <h2 className="">Nuevos premios para que sigas participando de nuestros desafíos</h2>         
                        </div>           
                        <p className="card-text "> 
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit ex maiores officia quidem cumque distinctio nulla, temporibus ratione enim cupiditate impedit, facilis debitis voluptatum, blanditiis perspiciatis modi dolorem atque.
                        </p>                             
                    </div>
                  </div> 
                </a>
              </Center>
            </Flex>  
          </div>
        </div>
        
    );
  }
  const CustomModal = ({ showModalButtonText, modalHeader, modalBody }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button leftIcon={<EmailIcon/>} colorScheme="red" variant="solid" size={1} onClick={onOpen}>
           {showModalButtonText}
        </Button>
        <Modal isOpen={isOpen}  onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalHeader}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={4}>
                  <Textarea placeholder="Ingrese el el mensaje.." />
                  
                  <div id="idalert" className="hide">
                    <Alert status="success">
                    <AlertIcon />
                      <EmailIcon/> ¡Mensaje enviado!    
                    </Alert> 
                  </div>
                </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  var element = document.getElementById("idalert");
                  element.classList.remove("hide");
                }}
              >
                Enviar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };


  const CustomModal2 = ({ showModalButtonText, modalHeader, modalBody }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button className="btnMje " size={1} onClick={onOpen}>
          {showModalButtonText}
        </Button>
        <Modal isOpen={isOpen}  onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalHeader}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={4}>
                  {/* <Input placeholder="" size="lg" /> */}
                  <Textarea placeholder="Ingrese el el mensaje.." />
                  <div id="idalert" className="hide">
                    <Alert status="success">
                    <AlertIcon />
                      <EmailIcon/> ¡Mensaje enviado!   
                    </Alert> 
                  </div>
                </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  var element = document.getElementById("idalert");
                  element.classList.remove("hide");
                }}
              >
                Enviar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };


  