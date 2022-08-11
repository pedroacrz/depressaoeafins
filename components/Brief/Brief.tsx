type BriefData = {
 title: string;
 content: string;
 urlProfile: string;
 date: string;
}

export const Brief = (props: BriefData) => {
    return <div className='mt-10'>
        <h4 className='font-semibold'>Título do depoimento</h4>
        <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <div className='profile flex center items-center'>
            <div className='w-10 h-10 bg-gray-100 rounded-full mt-5'></div>
            <p className='ml-3 mt-6'>Fulano de tal <br /><small>11/08/2022 às 15:03</small></p>
        </div>
        <hr className='mt-3'/>
    </div>
}