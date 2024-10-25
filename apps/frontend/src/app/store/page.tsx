// Componentes
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  import ProductButton from "@/components/ProductButton";
  
  export default function StorePage() {
    // next js replace a with Link
    // const PaginationLink = ({...props }: ) => (
    //       <PaginationItem>
    //     -   <a>
    //     +   <Link>
    //           // ...
    //     -   </a>
    //     +   </Link>
    //       </PaginationItem>
    //     )
  
    return (
          <div className="max-w-6xl mx-auto">
                <div className='grid grid-cols-4 gap-6'>
                      <ProductButton id="1">
                      </ProductButton>
                </div>
  
                <Pagination>
                      <PaginationContent>
                            <PaginationItem>
                                  <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                  <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                  <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                  <PaginationNext href="#" />
                            </PaginationItem>
                      </PaginationContent>
                </Pagination>
          </div>
          
  
    );
  }
  